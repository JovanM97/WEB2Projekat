export class admin{
    private _name: string;
    private _password: string;
    private _role: string;
    
    constructor(name: string, password: string, role: string){
        this.name = name;
        this.password = password;
        this.role = role;
    }


    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }
}