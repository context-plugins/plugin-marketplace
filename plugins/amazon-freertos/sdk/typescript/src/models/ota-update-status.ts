import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OtaUpdateStatus = {
  CreatePending: "CREATE_PENDING",
  CreateInProgress: "CREATE_IN_PROGRESS",
  CreateComplete: "CREATE_COMPLETE",
  CreateFailed: "CREATE_FAILED",
} as const;
export type OtaUpdateStatus = (typeof OtaUpdateStatus)[keyof typeof OtaUpdateStatus] | (string & {});

export const otaUpdateStatusSchema: EnumSchema<OtaUpdateStatus> = s.enumOf<OtaUpdateStatus>(OtaUpdateStatus);
