import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  portfolioMembershipCompactSchema,
  type PortfolioMembershipCompact,
} from "./portfolio-membership-compact.js";

export type PortfolioMembershipsResponse = {
  data?: PortfolioMembershipCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfolioMembershipsResponseSchema: Schema<PortfolioMembershipsResponse> =
  s.object<PortfolioMembershipsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => portfolioMembershipCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
