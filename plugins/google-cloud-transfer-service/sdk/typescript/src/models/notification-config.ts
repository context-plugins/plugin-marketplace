import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import { payloadFormatSchema, type PayloadFormat } from "./payload-format.js";

/**
 * Specification to configure notifications published to Pub/Sub. Notifications are published to the
 * customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of
 * the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the
 * project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the
 * `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The
 * `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified
 * `PayloadFormat`.
 */
export type NotificationConfig = {
  /** Required. The desired format of the notification message payloads. */
  payloadFormat?: PayloadFormat;
  /**
   * Required. The `Topic.name` of the Pub/Sub topic to which to publish notifications. Must be of
   * the format: `projects/{project}/topics/{topic}`. Not matching this format results in an
   * INVALID_ARGUMENT error.
   */
  pubsubTopic?: string;
  /**
   * Event types for which a notification is desired. If empty, send notifications for all event
   * types.
   */
  eventTypes?: EventType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationConfigSchema: Schema<NotificationConfig> = s.object<NotificationConfig>(
  {
    payloadFormat: s.optional(s.lazy(() => payloadFormatSchema)),
    pubsubTopic: s.optional(s.string()),
    eventTypes: s.optional(s.array(s.lazy(() => eventTypeSchema))),
  },
  { additionalProperties: s.json() },
);
