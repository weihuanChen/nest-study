import { FileValidator } from '@nestjs/common';
import { IFile } from '@nestjs/common/pipes/file/interfaces';

export class MyFileValidator extends FileValidator {
  isValid<TFile extends IFile = Express.Multer.File>(
    file?: TFile,
  ): boolean | Promise<boolean> {
    if (file.size > 10000) {
      return false;
    }
    return true;
  }
  constructor(options) {
    super(options);
  }
  buildErrorMessage(file: Express.Multer.File): string {
    return `文件 ${file.originalname} 大小超过 10k`;
  }
}
