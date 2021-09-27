import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    // Receber o Token
    const authToken = request.headers.authorization

    // Validar se token está preenchido
    if(!authToken){
        return response.status(401).end()
    }

    // Validar se token é válido
    
    // essa const vai servir pra separar o "Bearer" que vem junto com o token.
    // utiliza-se o " espaço " como referência, por só ter um espaço separando
    // o Bearer do token
    // a virgula antes do "token" serve para ignorar o primeiro elemento do array
    // e atribuir somente o segundo elemento à váriável token
    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify( token , "5434d774ca8543cface83440c0d5a51b") as IPayload

        //Recuperar informações do usuário
        request.user_id = sub

        return next()
    } catch (error) {
        return response.status(401).end()
    }



}