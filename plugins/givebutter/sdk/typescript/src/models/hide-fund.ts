import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type HideFund = {
  /** @default "hide_fund" */
  name?: "hide_fund";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hideFundSchema: Schema<HideFund> = s.object<HideFund>(
  {
    name: s.defaulted(s.literal("hide_fund"), "hide_fund"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
