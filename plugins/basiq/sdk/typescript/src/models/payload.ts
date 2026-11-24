import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { links5Schema, type Links5 } from "./links5.js";

export type Payload = {
  eventTypeId?: string;
  eventId?: string;
  links?: Links5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payloadSchema: Schema<Payload> = s.object<Payload>(
  {
    eventTypeId: s.optional(s.string()),
    eventId: s.optional(s.string()),
    links: s.optional(s.lazy(() => links5Schema)),
  },
  { additionalProperties: s.json() },
);
