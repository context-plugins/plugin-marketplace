import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventConfigSchema, type EventConfig } from "./event-config.js";

export type V2ApisRequest1 = {
  /** The name of the Api. */
  name: string;
  /** The owner contact information for the Api. */
  ownerContact?: string;
  eventConfig: EventConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2ApisRequest1Schema: Schema<V2ApisRequest1> = s.object<V2ApisRequest1>(
  {
    name: s.string(),
    ownerContact: s.optional(s.string()),
    eventConfig: eventConfigSchema,
  },
  { additionalProperties: s.json() },
);
