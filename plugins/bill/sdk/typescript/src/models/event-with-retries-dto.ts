import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventRetryDtoSchema, type EventRetryDto } from "./event-retry-dto.js";

/** Event and retry attempts information. */
export type EventWithRetriesDto = {
  /** BILL-generated ID of the event */
  id?: string;
  /** Event type */
  type?: string;
  /** Event type version */
  version?: string;
  /** BILL-generated ID of the subscription */
  subscriptionId?: string;
  /** Event payload. The payload is JSON escaped and presented as a string. */
  payload?: string;
  /** Event created date and time */
  createdTime?: Date;
  /** HTTP status code received from the notification URL */
  statusCode?: number;
  /** Event retries information */
  retries?: EventRetryDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventWithRetriesDtoSchema: Schema<EventWithRetriesDto> = s.object<EventWithRetriesDto>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.string()),
    version: s.optional(s.string()),
    subscriptionId: s.optional(s.string()),
    payload: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    statusCode: s.optional(s.int()),
    retries: s.optional(s.array(s.lazy(() => eventRetryDtoSchema))),
  },
  { additionalProperties: s.json() },
);
