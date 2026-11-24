import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type EventResponse = {
  status?: Status;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventResponseSchema: Schema<EventResponse> = s.object<EventResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
  },
  { additionalProperties: s.json() },
);
