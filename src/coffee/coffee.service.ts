import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CoffeeService {
constructor(private readonly db: PrismaService){}

  create(createCoffeeDto: CreateCoffeeDto) {
    return this.db.coffee.create({
      data :createCoffeeDto
    })
  }

  findAll() {
    return `This action returns all coffee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coffee`;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return `This action updates a #${id} coffee`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffee`;
  }
}
