import { LoggingBackend } from '../src/logging-backend';
import { TestAppender } from './test.appender';
import { Logger } from '../src/logger';

describe('Logging', () => {
  it('message should be recorded', () => {
    const appender = new TestAppender();
    LoggingBackend.appenders.push(appender);

    const logger = new Logger('TestLogger');
    logger.info('hello');


    expect(appender.messages.length).toBe(1);
  });
});
