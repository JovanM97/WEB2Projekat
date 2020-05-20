import { Flight } from './flight';


export class AvioComp {
    private _name: string;
    private _address: string;
    private _description: string;
    private _averageGrade: number;
    private _allGrades: Array<number>;
    private _destinations: Array<string>;
    private _flights: Array<Flight>;
    private _discountTickets: Array<number>;
    private _seats: [number, number, number];
    private _priceList: [number, number, number];
    private _baggage: string;
    
    constructor(name:string, addr: string, descr: string,
                avrG: number, allG: Array<number>, dest: Array<string>,
                fli: Array<Flight>, discT: Array<number>,
                seats: [number, number, number], 
                priceList: [number, number, number], bag: string){

        this.name = name;
        this.address = addr;
        this.description = descr;
        this.averageGrade = avrG;
        this.allGrades = allG;
        this.destinations = dest;
        this.flights = fli;
        this.discountTickets = discT;
        this.seats = seats;
        this.priceList = priceList;
        this.baggage = bag;
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

    public get destinations(): Array<string> {
        return this._destinations;
    }
    public set destinations(value: Array<string>) {
        this._destinations = value;
    }

    public get flights(): Array<Flight> {
        return this._flights;
    }
    public set flights(value: Array<Flight>) {
        this._flights = value;
    }

    public get discountTickets(): Array<number> {
        return this._discountTickets;
    }
    public set discountTickets(value: Array<number>) {
        this._discountTickets = value;
    }

    public get seats(): [number, number, number] {
        return this._seats;
    }
    public set seats(value: [number, number, number]) {
        this._seats = value;
    }

    public get priceList(): [number, number, number] {
        return this._priceList;
    }
    public set priceList(value: [number, number, number]) {
        this._priceList = value;
    }

    public get baggage(): string {
        return this._baggage;
    }
    public set baggage(value: string) {
        this._baggage = value;
    }
}
