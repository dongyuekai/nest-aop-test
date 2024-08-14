import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
// import { LoginGuard } from './login.guard';

@Controller()
@UsePipes(ValidatePipe)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('handler.....');
    return this.appService.getHello();
  }

  @Get('aaa')
  // @UseGuards(LoginGuard)
  aaa(): string {
    console.log('aaa...');
    return 'aaa';
  }

  @Get('bbb')
  @UseInterceptors(TimeInterceptor)
  bbb(): string {
    console.log('bbb...');
    return 'bbb';
  }

  @Get('ccc')
  ccc(@Query('num', ValidatePipe) num: number) {
    return num + 1;
  }
}
