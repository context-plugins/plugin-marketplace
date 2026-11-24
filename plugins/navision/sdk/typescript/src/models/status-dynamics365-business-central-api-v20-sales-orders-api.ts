import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order status */
export const StatusDynamics365BusinessCentralApiV20SalesOrdersApi = {
  Draft: "Draft",
  InReview: "In Review",
  Open: "Open",
  Released: "Released",
} as const;
export type StatusDynamics365BusinessCentralApiV20SalesOrdersApi =
  | (typeof StatusDynamics365BusinessCentralApiV20SalesOrdersApi)[keyof typeof StatusDynamics365BusinessCentralApiV20SalesOrdersApi]
  | (string & {});

export const statusDynamics365BusinessCentralApiV20SalesOrdersApiSchema: EnumSchema<StatusDynamics365BusinessCentralApiV20SalesOrdersApi> =
  s.enumOf<StatusDynamics365BusinessCentralApiV20SalesOrdersApi>(
    StatusDynamics365BusinessCentralApiV20SalesOrdersApi,
  );
