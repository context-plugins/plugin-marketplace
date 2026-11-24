import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RouteFilterPrefix = {
  /**
   * The CIDR block for the advertised route. Separate multiple routes using commas. An IPv6 CIDR
   * must use /64 or shorter.
   */
  cidr?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const routeFilterPrefixSchema: Schema<RouteFilterPrefix> = s.object<RouteFilterPrefix>(
  {
    cidr: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
