import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi = {
  Draft: "Draft",
  InReview: "In Review",
  Open: "Open",
  Released: "Released",
} as const;
export type StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi =
  | (typeof StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi)[keyof typeof StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi]
  | (string & {});

export const statusDynamics365BusinessCentralApiV20PurchaseOrdersApiSchema: EnumSchema<StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi> =
  s.enumOf<StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi>(
    StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi,
  );
