export interface loginForm {
    username: string,
    password: string
}

interface datatype {
    token: string
}

interface user {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string,
}

export interface loginResponseData {
    code: number,
    data: datatype
}

export interface userResponseData {
    code: number,
    data: user
}