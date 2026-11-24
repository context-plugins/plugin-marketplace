import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressFamily5Schema, type AddressFamily5 } from "./address-family5.js";
import { routeDirectionSchema, type RouteDirection } from "./route-direction.js";

export type RouteFilters = {
  /**
   * The direction of the routes to return. The valid values are accepted (routes received from the
   * customer network) and advertised (routes advertised to the customer network).
   */
  routeDirection?: RouteDirection;
  /** The address family of the routes to return. The valid values are ipv4 and ipv6. */
  addressFamily?: AddressFamily5;
  /** The CIDRs (prefixes) used to filter the routes. You can specify up to 10 CIDRs. */
  cidrs?: string[];
  /** The autonomous system (AS) numbers used to filter the routes by their AS path. */
  asPath?: number[];
  /** The BGP communities used to filter the routes. */
  communities?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const routeFiltersSchema: Schema<RouteFilters> = s.object<RouteFilters>(
  {
    routeDirection: s.optional(s.lazy(() => routeDirectionSchema)),
    addressFamily: s.optional(s.lazy(() => addressFamily5Schema)),
    cidrs: s.optional(s.array(s.string())),
    asPath: s.optional(s.array(s.int())),
    communities: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
