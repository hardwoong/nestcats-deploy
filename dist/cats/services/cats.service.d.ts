/// <reference types="multer" />
import { Cat } from '../cats.schema';
import { CatRequestDto } from '../dto/cats.request.dto';
import { CatsRepository } from '../cats.repository';
export declare class CatsService {
    private readonly catsRepository;
    constructor(catsRepository: CatsRepository);
    getAllCat(): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../../comments/comments.schema").Comments[];
    }[]>;
    uploadImg(cat: Cat, files: Express.Multer.File[]): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../../comments/comments.schema").Comments[];
    }>;
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../../comments/comments.schema").Comments[];
    }>;
}
