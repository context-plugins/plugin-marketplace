import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to
 * transfer updated files.
 */
export type EventStreamModel = {
  /**
   * Specifies the data and time at which Storage Transfer Service stops listening for events from
   * this stream. After this time, any transfers in progress will complete, but no new transfers are
   * initiated.
   */
  eventStreamExpirationTime?: string;
  /**
   * Required. Specifies a unique name of the resource such as AWS SQS ARN in the form
   * 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form
   * 'projects/{project}/subscriptions/{sub}'.
   */
  name?: string;
  /**
   * Specifies the date and time that Storage Transfer Service starts listening for events from this
   * stream. If no start time is specified or start time is in the past, Storage Transfer Service
   * starts listening immediately.
   */
  eventStreamStartTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventStreamModelSchema: Schema<EventStreamModel> = s.object<EventStreamModel>(
  {
    eventStreamExpirationTime: s.optional(s.string()),
    name: s.optional(s.string()),
    eventStreamStartTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
