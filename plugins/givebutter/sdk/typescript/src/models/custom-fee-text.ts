import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Custom fee text. Accepts a JSON object. */
export type CustomFeeText = {
  /** @default "custom_fee_text" */
  name?: "custom_fee_text";
  value?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFeeTextSchema: Schema<CustomFeeText> = s.object<CustomFeeText>(
  {
    name: s.defaulted(s.literal("custom_fee_text"), "custom_fee_text"),
    value: s.optionalNullable(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
