import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@hbofficial/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
