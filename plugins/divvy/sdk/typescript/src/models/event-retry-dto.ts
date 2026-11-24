import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Event notification retry attempts information. */
export type EventRetryDto = {
  /** Event notification retry attempt number */
  attemptNumber?: number;
  /** Event notification retry created date and time */
  createdTime?: Date;
  /** HTTP status code received from the notification URL */
  statusCode?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventRetryDtoSchema: Schema<EventRetryDto> = s.object<EventRetryDto>(
  {
    attemptNumber: s.optional(s.int()),
    createdTime: s.optional(s.dateTime()),
    statusCode: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
