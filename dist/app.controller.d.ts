/// <reference types="multer" />
import { AwsService } from './aws.service';
export declare class AppController {
    private readonly awsService;
    constructor(awsService: AwsService);
    getHello(): string;
    uploadMediaFile(file: Express.Multer.File): Promise<{
        key: string;
        s3Object: import("aws-sdk/lib/request").PromiseResult<import("aws-sdk/clients/s3").PutObjectOutput, import("aws-sdk").AWSError>;
        contentType: string;
    }>;
    getImageUrl(key: string): string;
}
