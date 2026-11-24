import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventConfigSchema, type EventConfig } from "./event-config.js";

export type V2ApisRequest = {
  /** The name for the Api. */
  name: string;
  /** The owner contact information for the Api. */
  ownerContact?: string;
  tags?: Record<string, string>;
  eventConfig: EventConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2ApisRequestSchema: Schema<V2ApisRequest> = s.object<V2ApisRequest>(
  {
    name: s.string(),
    ownerContact: s.optional(s.string()),
    tags: s.optional(s.record(s.string(), s.string())),
    eventConfig: eventConfigSchema,
  },
  { additionalProperties: s.json() },
);
