import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Event information. */
export type EventDto = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventDtoSchema: Schema<EventDto> = s.object<EventDto>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.string()),
    version: s.optional(s.string()),
    subscriptionId: s.optional(s.string()),
    payload: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    statusCode: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
