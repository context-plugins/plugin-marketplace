import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueModelContentOverridesItemsMonetaryConversionOverrides = {
  variables?: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentOverridesItemsMonetaryConversionOverridesSchema: Schema<ValueModelContentOverridesItemsMonetaryConversionOverrides> =
  s.object<ValueModelContentOverridesItemsMonetaryConversionOverrides>(
    {
      variables: s.optional(s.record(s.string(), s.float64())),
    },
    { additionalProperties: s.json() },
  );
