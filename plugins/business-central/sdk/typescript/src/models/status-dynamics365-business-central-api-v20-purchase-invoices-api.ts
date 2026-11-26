import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi = {
  Draft: "Draft",
  InReview: "In Review",
  Open: "Open",
  Paid: "Paid",
  Canceled: "Canceled",
  Corrective: "Corrective",
} as const;
export type StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi =
  | (typeof StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi)[keyof typeof StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi]
  | (string & {});

export const statusDynamics365BusinessCentralApiV20PurchaseInvoicesApiSchema: EnumSchema<StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi> =
  s.enumOf<StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi>(
    StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi,
  );
