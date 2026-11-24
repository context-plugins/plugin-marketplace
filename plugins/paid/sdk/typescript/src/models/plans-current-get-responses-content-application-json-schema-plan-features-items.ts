import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  plansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsageSchema,
  type PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsage,
} from "./plans-current-get-responses-content-application-json-schema-plan-features-items-usage.js";

export type PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItems = {
  /** The name of the product */
  productName: string;
  /** The name of the product attribute */
  attributeName: string;
  /** The pricing configuration for this feature */
  pricing: Record<string, unknown>;
  /** Current usage and limits for this feature */
  usage: PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const plansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsSchema: Schema<PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItems> =
  s.object<PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItems>(
    {
      productName: s.string(),
      attributeName: s.string(),
      pricing: s.record(s.string(), s.unknown()),
      usage: plansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsageSchema,
    },
    { additionalProperties: s.json() },
  );
