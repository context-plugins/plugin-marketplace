import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ItemsRequest = {
  /** Item display name. */
  name: string;
  description?: string;
  /** Item price in paise. */
  amount: number;
  /** @default "INR" */
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemsRequestSchema: Schema<ItemsRequest> = s.object<ItemsRequest>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    amount: s.int(),
    currency: s.defaulted(s.string(), "INR"),
  },
  { additionalProperties: s.json() },
);
