export class Car {
    private _marka: string;
    private _averageGrade: number;
    private _allGrades: Array<number>;
    private _reserved: boolean;
    
    constructor(marka: string, res: boolean)
    {
        this.marka = marka;
        this.reserved = res;
    }



    public get marka(): string {
        return this._marka;
    }
    public set marka(value: string) {
        this._marka = value;
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

    public get reserved(): boolean {
        return this._reserved;
    }
    public set reserved(value: boolean) {
        this._reserved = value;
    }
}
