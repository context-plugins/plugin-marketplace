import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { portfolioAddItemRequestSchema, type PortfolioAddItemRequest } from "./portfolio-add-item-request.js";

export type PortfoliosAddItemRequest = {
  data?: PortfolioAddItemRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosAddItemRequestSchema: Schema<PortfoliosAddItemRequest> =
  s.object<PortfoliosAddItemRequest>(
    {
      data: s.optional(s.lazy(() => portfolioAddItemRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
