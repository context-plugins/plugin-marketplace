import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { portfolioCompactSchema, type PortfolioCompact } from "./portfolio-compact.js";

export type PortfoliosResponse = {
  data?: PortfolioCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosResponseSchema: Schema<PortfoliosResponse> = s.object<PortfoliosResponse>(
  {
    data: s.optional(s.array(s.lazy(() => portfolioCompactSchema))),
  },
  { additionalProperties: s.json() },
);
