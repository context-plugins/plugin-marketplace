import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi = {
  Comment: "Comment",
  Account: "Account",
  Item: "Item",
  Resource: "Resource",
  FixedAsset: "Fixed Asset",
  Charge: "Charge",
} as const;
export type LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi =
  | (typeof LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi)[keyof typeof LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi]
  | (string & {});

export const lineTypeDynamics365BusinessCentralApiV20SalesOrdersApiSchema: EnumSchema<LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi> =
  s.enumOf<LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi>(
    LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi,
  );
