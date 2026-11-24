import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type DisableCompanyField = {
  /** @default "disable_company_field" */
  name?: "disable_company_field";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disableCompanyFieldSchema: Schema<DisableCompanyField> = s.object<DisableCompanyField>(
  {
    name: s.defaulted(s.literal("disable_company_field"), "disable_company_field"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
