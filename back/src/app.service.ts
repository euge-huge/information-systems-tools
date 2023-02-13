import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const oneOrTwo = Math.floor(Math.random() * 2);

        if (oneOrTwo === 1)
          resolve("Hello World! I'm Eugene Bystrov from 8K93 of TPU!");

        reject('Rejected');
      }, 10);
    });
  }
}
