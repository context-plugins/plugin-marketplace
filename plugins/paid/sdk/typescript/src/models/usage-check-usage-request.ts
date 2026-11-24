import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsageCheckUsageRequest = {
  /** External customer ID */
  externalCustomerId: string;
  /** External product ID (the external ID of the product/agent) */
  externalProductId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageCheckUsageRequestSchema: Schema<UsageCheckUsageRequest> = s.object<UsageCheckUsageRequest>(
  {
    externalCustomerId: s.string(),
    externalProductId: s.string(),
  },
  { additionalProperties: s.json() },
);
