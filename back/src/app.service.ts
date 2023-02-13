import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World! I'm Eugene Bystrov from 8K93 of TPU!");
      }, 36000);
    });
  }
}
