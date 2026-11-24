import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** available subscription */
export type Subscription = {
  /** Subscription ID */
  id?: number;
  /** Subscription name */
  name?: string;
  /** Subscription description */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
