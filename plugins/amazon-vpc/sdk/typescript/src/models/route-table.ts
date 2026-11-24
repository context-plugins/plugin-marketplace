import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { associationSchema, type Association } from "./association.js";
import { routeSchema, type Route } from "./route.js";
import { tagSchema, type Tag } from "./tag.js";

/** Describes a route table */
export type RouteTable = {
  /** The ID of the route table */
  routeTableId?: string;
  /** The ID of the VPC */
  vpcId?: string;
  /** The routes in the route table */
  routes?: Route[];
  /** The associations between the route table and subnets or gateways */
  associations?: Association[];
  /** The ID of the AWS account that owns the route table */
  ownerId?: string;
  /** Any tags assigned to the route table */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const routeTableSchema: Schema<RouteTable> = s.object<RouteTable>(
  {
    routeTableId: s.optional(s.string()),
    vpcId: s.optional(s.string()),
    routes: s.optional(s.array(s.lazy(() => routeSchema))),
    associations: s.optional(s.array(s.lazy(() => associationSchema))),
    ownerId: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
