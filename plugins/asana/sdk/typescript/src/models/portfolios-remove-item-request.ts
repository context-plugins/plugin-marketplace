import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  portfolioRemoveItemRequestSchema,
  type PortfolioRemoveItemRequest,
} from "./portfolio-remove-item-request.js";

export type PortfoliosRemoveItemRequest = {
  data?: PortfolioRemoveItemRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosRemoveItemRequestSchema: Schema<PortfoliosRemoveItemRequest> =
  s.object<PortfoliosRemoveItemRequest>(
    {
      data: s.optional(s.lazy(() => portfolioRemoveItemRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
