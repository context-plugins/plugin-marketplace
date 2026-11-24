import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDoiTBillingTransferApi = {
  HandshakePending: "handshake_pending",
  CurExportWaiting: "cur_export_waiting",
  Active: "active",
  Declined: "declined",
  Canceled: "canceled",
  Expired: "expired",
} as const;
export type StatusDoiTBillingTransferApi =
  | (typeof StatusDoiTBillingTransferApi)[keyof typeof StatusDoiTBillingTransferApi]
  | (string & {});

export const statusDoiTBillingTransferApiSchema: EnumSchema<StatusDoiTBillingTransferApi> =
  s.enumOf<StatusDoiTBillingTransferApi>(StatusDoiTBillingTransferApi);
