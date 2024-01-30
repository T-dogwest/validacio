import { IsDateString, IsDefined, IsInt, IsNotEmpty, IsNumber, IsPositive, Matches, Max } from "class-validator";

export class CreateCoffeeDto {
    @IsNotEmpty({message :'A nev megadasa kötelező'})
    name:string;

    @IsDefined({message:'az ár megadása kötelező'})
    @IsPositive()
    @IsInt()
    price:number;

    @IsDefined()
    @IsNumber()
    @IsPositive()
    @Max(100,{message:'Max 100 lehet a tartalom'})
    caffeine:number;

    @IsDefined()
    @IsDateString()
    processedDate:string;

    @IsDefined()
    @Matches(/^[A-Z]{4}[0-9]{2}$/)
    productCode:string;
}
