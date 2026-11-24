import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TargetDistribution = {
  /** Distribution percentage for the variation */
  percentage: number;
  /** Variation ID or key from `feature.variations` */
  variation: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const targetDistributionProperties: s.Shape<TargetDistribution> = {
  percentage: s.float64(),
  variation: s.string(),
  _keysMap: {
    variation: "_variation",
  },
};

export const targetDistributionInternalSchema: Schema<TargetDistribution> = s.object<TargetDistribution>(
  targetDistributionProperties,
  { additionalProperties: s.json() },
);

export const targetDistributionSchema: Schema<TargetDistribution> = s.lazySchema(() =>
  s.object<TargetDistribution>(
    {
      ...targetDistributionProperties,
      percentage: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
