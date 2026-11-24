import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Subscription = {
  id?: string;
  entityType?: string;
  entityId?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>(
  {
    id: s.optional(s.string()),
    entityType: s.optional(s.string()),
    entityId: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
