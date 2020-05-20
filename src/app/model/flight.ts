export class Flight {
    private _id: number;
    private _departure: Date;
    private _arrival: Date;
    private _travelTime: number;
    private _travelDistance: number;
    private _layover: [number, Array<string>];
    private _ticketPrice: number;
    
    constructor(dep: Date, arr: Date, tt: number, td: number, lay: [number, Array<string>], t:number){
        this.departure = dep;
        this.arrival = arr;
        this.travelTime = tt;
        this.travelDistance = td;
        this.layover = lay;
        this.ticketPrice = t;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get departure(): Date {
        return this._departure;
    }
    public set departure(value: Date) {
        this._departure = value;
    }

    public get arrival(): Date {
        return this._arrival;
    }
    public set arrival(value: Date) {
        this._arrival = value;
    }

    public get travelTime(): number {
        return this._travelTime;
    }
    public set travelTime(value: number) {
        this._travelTime = value;
    }

    public get travelDistance(): number {
        return this._travelDistance;
    }
    public set travelDistance(value: number) {
        this._travelDistance = value;
    }

    public get layover(): [number, Array<string>] {
        return this._layover;
    }
    public set layover(value: [number, Array<string>]) {
        this._layover = value;
    }

    public get ticketPrice(): number {
        return this._ticketPrice;
    }
    public set ticketPrice(value: number) {
        this._ticketPrice = value;
    }
}
