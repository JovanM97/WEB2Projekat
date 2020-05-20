export class RentACar {
    private _name: string;
    private _address: string;
    private _description: string;
    private _priceList: Array<[string, number]>;
    private _carList: Array<string>;
    private _branches: Array<string>;
    private _averageGrade: number;
    private _allGrades: Array<number>; 
    

    constructor(name:string, addr:string, desc:string,
                priceL:Array<[string, number]>, carL:Array<string>,
                bran:Array<string>) {
        this.name = name;
        this.address = addr;
        this.description = desc;
        this.priceList = priceL;
        this.carList = carL;
        this.branches = bran;            
    }


    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get priceList(): Array<[string, number]> {
        return this._priceList;
    }
    public set priceList(value: Array<[string, number]>) {
        this._priceList = value;
    }

    public get carList(): Array<string> {
        return this._carList;
    }
    public set carList(value: Array<string>) {
        this._carList = value;
    }

    public get branches(): Array<string> {
        return this._branches;
    }
    public set branches(value: Array<string>) {
        this._branches = value;
    }

    public get averageGrade(): number {
        return this._averageGrade;
    }
    public set averageGrade(value: number) {
        this._averageGrade = value;
    }

    public get allGrades(): Array<number> {
        return this._allGrades;
    }
    public set allGrades(value: Array<number>) {
        this._allGrades = value;
    }
}
