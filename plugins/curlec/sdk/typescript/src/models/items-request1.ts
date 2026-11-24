import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ItemsRequest1 = {
  name?: string;
  description?: string;
  /** Price in paise. */
  amount?: number;
  currency?: string;
  active?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemsRequest1Schema: Schema<ItemsRequest1> = s.object<ItemsRequest1>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    amount: s.optional(s.int()),
    currency: s.optional(s.string()),
    active: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
