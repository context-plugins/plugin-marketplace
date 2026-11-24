import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlanWithFeaturesFeaturesItems = {
  /** The name of the product */
  productName: string;
  /** The name of the product attribute */
  attributeName: string;
  /** The pricing configuration for this feature */
  pricing: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planWithFeaturesFeaturesItemsSchema: Schema<PlanWithFeaturesFeaturesItems> =
  s.object<PlanWithFeaturesFeaturesItems>(
    {
      productName: s.string(),
      attributeName: s.string(),
      pricing: s.record(s.string(), s.unknown()),
    },
    { additionalProperties: s.json() },
  );
