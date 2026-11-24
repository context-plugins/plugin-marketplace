import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** [Opt In](/docs/input-output-options). The portfolio the user is a member of. */
export type PortfolioCompact2 = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the portfolio. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfolioCompact2Schema: Schema<PortfolioCompact2> = s.object<PortfolioCompact2>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
    },
  },
  { additionalProperties: s.json() },
);
