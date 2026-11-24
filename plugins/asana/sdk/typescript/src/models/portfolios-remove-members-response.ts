import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { portfolioResponseSchema, type PortfolioResponse } from "./portfolio-response.js";

export type PortfoliosRemoveMembersResponse = {
  data?: PortfolioResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosRemoveMembersResponseSchema: Schema<PortfoliosRemoveMembersResponse> =
  s.object<PortfoliosRemoveMembersResponse>(
    {
      data: s.optional(s.lazy(() => portfolioResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
