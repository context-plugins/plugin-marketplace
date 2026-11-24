import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConvenienceFee = {
  /** Convenience fee percentage */
  percentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const convenienceFeeProperties: s.Shape<ConvenienceFee> = {
  percentage: s.optional(s.float64()),
};

export const convenienceFeeInternalSchema: Schema<ConvenienceFee> = s.object<ConvenienceFee>(
  convenienceFeeProperties,
  { additionalProperties: s.json() },
);

export const convenienceFeeSchema: Schema<ConvenienceFee> = s.lazySchema(() =>
  s.object<ConvenienceFee>(
    {
      ...convenienceFeeProperties,
      percentage: s.optional(s.float64().check(s.gte(0), s.lte(3))),
    },
    { additionalProperties: s.json() },
  ),
);
