import { Controller } from 'egg';
import { Action } from '../../../../../lib/action';

export default class TSHomeController extends Controller {
  public async index() {
    const data = await this.ctx.service.test.get(123);
    this.ctx.body = `hi, ${data.name}`;
  }
  

  @Action({ method: 'get', path: '/testBP', loginRequired: false })
  public async testBP() {
    const data = await this.ctx.service.test.get(123);
    this.ctx.body = `hi, ${data.name}`;
  }

  @Action({ method: 'get', path: '/testPrivateMethod', loginRequired: false })
  public async testPrivateMethod() {
    const data = await this.ctx.service.test.get(123);
    this.ctx.body = this.inner(data.name);
  }

  @Action({ method: 'get', path: '/testCurrentLoginUser', loginRequired: true })
  public async testCurrentLoginUser() {
    const user = this.ctx.currentUser;
    this.ctx.body = user && user.id;
  }

  @Action({ method: 'post', path: '/testNoLogin', loginRequired: true })
  public async testNoLogin() {
    this.ctx.body = 'OK';
  }

  public async rend() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    return await this.ctx.render('/test.tpl', dataList);
  }

  private inner(name: string) {
    return `hi, ${name}`;
  }
}