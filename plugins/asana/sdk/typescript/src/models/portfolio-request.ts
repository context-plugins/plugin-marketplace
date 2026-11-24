import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorSchema, type Color } from "./color.js";

export type PortfolioRequest = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the portfolio. */
  name?: string;
  /** Color of the portfolio. */
  color?: Color;
  /**
   * An array of strings identifying users. These can either be the string "me", an email, or the
   * gid of a user.
   */
  members?: string[];
  /** Gid of an object. */
  workspace?: string;
  /** True if the portfolio is public to its workspace members. */
  public?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfolioRequestSchema: Schema<PortfolioRequest> = s.object<PortfolioRequest>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    color: s.optional(s.lazy(() => colorSchema)),
    members: s.optional(s.array(s.string())),
    workspace: s.optional(s.string()),
    public: s.optional(s.boolean()),
    _keysMap: {
      resourceType: "resource_type",
    },
  },
  { additionalProperties: s.json() },
);
