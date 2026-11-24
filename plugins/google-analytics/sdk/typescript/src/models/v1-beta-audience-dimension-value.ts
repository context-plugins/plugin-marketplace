import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The value of a dimension. */
export type V1BetaAudienceDimensionValue = {
  /** Value as a string if the dimension type is a string. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1BetaAudienceDimensionValueSchema: Schema<V1BetaAudienceDimensionValue> =
  s.object<V1BetaAudienceDimensionValue>(
    {
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
