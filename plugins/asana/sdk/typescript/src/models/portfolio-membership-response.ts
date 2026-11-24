import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { portfolioCompact2Schema, type PortfolioCompact2 } from "./portfolio-compact2.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

export type PortfolioMembershipResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** [Opt In](/docs/input-output-options). The portfolio the user is a member of. */
  portfolio?: PortfolioCompact2;
  user?: UserCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfolioMembershipResponseSchema: Schema<PortfolioMembershipResponse> =
  s.object<PortfolioMembershipResponse>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      portfolio: s.optional(s.lazy(() => portfolioCompact2Schema)),
      user: s.optional(s.lazy(() => userCompactSchema)),
      _keysMap: {
        resourceType: "resource_type",
      },
    },
    { additionalProperties: s.json() },
  );
