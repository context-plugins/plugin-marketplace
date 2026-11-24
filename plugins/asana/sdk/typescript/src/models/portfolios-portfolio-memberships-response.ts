import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  portfolioMembershipCompactSchema,
  type PortfolioMembershipCompact,
} from "./portfolio-membership-compact.js";

export type PortfoliosPortfolioMembershipsResponse = {
  data?: PortfolioMembershipCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosPortfolioMembershipsResponseSchema: Schema<PortfoliosPortfolioMembershipsResponse> =
  s.object<PortfoliosPortfolioMembershipsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => portfolioMembershipCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
