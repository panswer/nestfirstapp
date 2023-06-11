import { TaskStatus } from "../task.entity";
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    @IsNotEmpty()
    description: string
}

export class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    describe?: string

    @IsString()
    @IsOptional()
    @IsIn(Object.values(TaskStatus))
    status?: TaskStatus
}