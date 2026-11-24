import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `string` value. */
export type SuggestedAmountsMode = {
  /** @default "suggested_amounts_mode" */
  name?: "suggested_amounts_mode";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const suggestedAmountsModeSchema: Schema<SuggestedAmountsMode> = s.object<SuggestedAmountsMode>(
  {
    name: s.defaulted(s.literal("suggested_amounts_mode"), "suggested_amounts_mode"),
    value: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
