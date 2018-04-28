import { Appender } from '../src/appender';
import { LogLevel } from '../src/log-level';

export class TestAppender implements Appender {
  public messages: { name: string, level: LogLevel, message: any, additional: any[] }[] = [];

  constructor(public level: LogLevel = LogLevel.ALL) {
  }

  appendMessage(name: string, level: LogLevel, message: any, additional: any[]): void {
    this.messages.push({ name: name, level: level, message: message, additional: additional });
  }
}
