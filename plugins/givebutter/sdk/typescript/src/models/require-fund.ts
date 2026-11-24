import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type RequireFund = {
  /** @default "require_fund" */
  name?: "require_fund";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requireFundSchema: Schema<RequireFund> = s.object<RequireFund>(
  {
    name: s.defaulted(s.literal("require_fund"), "require_fund"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
