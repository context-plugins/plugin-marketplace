import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { routeTableSchema, type RouteTable } from "./route-table.js";

/** Response from the CreateRouteTable action */
export type CreateRouteTableResponse = {
  /** Describes a route table */
  routeTable?: RouteTable;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createRouteTableResponseSchema: Schema<CreateRouteTableResponse> =
  s.object<CreateRouteTableResponse>(
    {
      routeTable: s.optional(s.lazy(() => routeTableSchema)),
    },
    { additionalProperties: s.json() },
  );
