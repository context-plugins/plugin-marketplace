import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  portfolioMembershipResponseSchema,
  type PortfolioMembershipResponse,
} from "./portfolio-membership-response.js";

export type PortfolioMembershipsResponse1 = {
  data?: PortfolioMembershipResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfolioMembershipsResponse1Schema: Schema<PortfolioMembershipsResponse1> =
  s.object<PortfolioMembershipsResponse1>(
    {
      data: s.optional(s.lazy(() => portfolioMembershipResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
