import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { originSchema, type Origin } from "./origin.js";
import {
  stateAmazonVpcRouteTablesApiSchema,
  type StateAmazonVpcRouteTablesApi,
} from "./state-amazon-vpc-route-tables-api.js";

export type Route = {
  /** The IPv4 CIDR block used for the destination match */
  destinationCidrBlock?: string;
  /** The IPv6 CIDR block used for the destination match */
  destinationIpv6CidrBlock?: string;
  /** The ID of the gateway attached to your VPC */
  gatewayId?: string;
  /** The ID of a NAT gateway */
  natGatewayId?: string;
  /** The ID of the network interface */
  networkInterfaceId?: string;
  /** The state of the route */
  state?: StateAmazonVpcRouteTablesApi;
  /** Describes how the route was created */
  origin?: Origin;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const routeSchema: Schema<Route> = s.object<Route>(
  {
    destinationCidrBlock: s.optional(s.string()),
    destinationIpv6CidrBlock: s.optional(s.string()),
    gatewayId: s.optional(s.string()),
    natGatewayId: s.optional(s.string()),
    networkInterfaceId: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateAmazonVpcRouteTablesApiSchema)),
    origin: s.optional(s.lazy(() => originSchema)),
  },
  { additionalProperties: s.json() },
);
