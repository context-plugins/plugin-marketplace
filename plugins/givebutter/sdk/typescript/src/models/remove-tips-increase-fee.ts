import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type RemoveTipsIncreaseFee = {
  /** @default "remove_tips_increase_fee" */
  name?: "remove_tips_increase_fee";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const removeTipsIncreaseFeeSchema: Schema<RemoveTipsIncreaseFee> = s.object<RemoveTipsIncreaseFee>(
  {
    name: s.defaulted(s.literal("remove_tips_increase_fee"), "remove_tips_increase_fee"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
