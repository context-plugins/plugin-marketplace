import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressFamily6Schema, type AddressFamily6 } from "./address-family6.js";
import { asPathSegmentSchema, type AsPathSegment } from "./as-path-segment.js";
import { routeDirection1Schema, type RouteDirection1 } from "./route-direction1.js";

export type Route = {
  /** The CIDR (prefix) of the route. */
  cidr?: string;
  /**
   * The direction of the route. The valid values are accepted (received from the customer network)
   * and advertised (advertised to the customer network).
   */
  routeDirection?: RouteDirection1;
  /** The address family of the route. The valid values are ipv4 and ipv6. */
  addressFamily?: AddressFamily6;
  /** The autonomous system (AS) path of the route. */
  asPath?: AsPathSegment[];
  /** The BGP communities associated with the route. */
  communities?: string[];
  /**
   * The Direct Connect endpoint that terminates the logical connection. This device might be
   * different than the device that terminates the physical connection.
   */
  awsLogicalDeviceId?: string;
  /** The time when the route was installed. The value is displayed in UTC format. */
  routeInstalledAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const routeSchema: Schema<Route> = s.object<Route>(
  {
    cidr: s.optional(s.string()),
    routeDirection: s.optional(s.lazy(() => routeDirection1Schema)),
    addressFamily: s.optional(s.lazy(() => addressFamily6Schema)),
    asPath: s.optional(s.array(s.lazy(() => asPathSegmentSchema))),
    communities: s.optional(s.array(s.string())),
    awsLogicalDeviceId: s.optional(s.string()),
    routeInstalledAt: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
