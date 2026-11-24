import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type RecurringUpsell = {
  /** @default "recurring_upsell" */
  name?: "recurring_upsell";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recurringUpsellSchema: Schema<RecurringUpsell> = s.object<RecurringUpsell>(
  {
    name: s.defaulted(s.literal("recurring_upsell"), "recurring_upsell"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
