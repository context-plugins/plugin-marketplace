import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `string` value. */
export type DefaultFund = {
  /** @default "default_fund" */
  name?: "default_fund";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const defaultFundSchema: Schema<DefaultFund> = s.object<DefaultFund>(
  {
    name: s.defaulted(s.literal("default_fund"), "default_fund"),
    value: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
