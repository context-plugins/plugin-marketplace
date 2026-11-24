import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  costEstimationResourceCollectionFilterSchema,
  type CostEstimationResourceCollectionFilter,
} from "./cost-estimation-resource-collection-filter.js";

export type CostEstimationRequest = {
  resourceCollection: CostEstimationResourceCollectionFilter;
  /** The idempotency token used to identify each cost estimate request. */
  clientToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const costEstimationRequestSchema: Schema<CostEstimationRequest> = s.object<CostEstimationRequest>(
  {
    resourceCollection: costEstimationResourceCollectionFilterSchema,
    clientToken: s.optional(s.string()),
    _keysMap: {
      resourceCollection: "ResourceCollection",
      clientToken: "ClientToken",
    },
  },
  { additionalProperties: s.json() },
);
