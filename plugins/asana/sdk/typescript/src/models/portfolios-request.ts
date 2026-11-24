import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { portfolioRequestSchema, type PortfolioRequest } from "./portfolio-request.js";

export type PortfoliosRequest = {
  data?: PortfolioRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosRequestSchema: Schema<PortfoliosRequest> = s.object<PortfoliosRequest>(
  {
    data: s.optional(s.lazy(() => portfolioRequestSchema)),
  },
  { additionalProperties: s.json() },
);
