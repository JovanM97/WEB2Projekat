export class User {
    private _name: string;
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _city: string;
    private _phone: string;

    constructor(name: string, lastname: string, email: string, password: string, city: string, phone: string){
        this.name = name;
        this.lastName = lastname;
        this.email = email;
        this.password = password;
        this.city = city;
        this.phone = phone;
    }


    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }

    public get phone(): string {
        return this._phone;
    }
    public set phone(value: string) {
        this._phone = value;
    }
}