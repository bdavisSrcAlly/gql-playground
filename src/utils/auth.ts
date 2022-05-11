import * as jwt from 'jsonwebtoken';

export const APP_SECRET = "not-a-real-secret-to-anybody";

export interface AuthTokenPayload {
    userId: number;
}

export function decodeAuthHeader(authHeader: String): AuthTokenPayload {
    const token = authHeader.replace("Bearer ", "");

    if (!token) {
        throw new Error("No token found");
    }
    return jwt.verify(token, APP_SECRET) as AuthTokenPayload;
}