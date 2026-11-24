import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDoiTSignupApi = {
  PendingConsent: "pending_consent",
  Consented: "consented",
  Provisioning: "provisioning",
  Completed: "completed",
  Rejected: "rejected",
  Expired: "expired",
  Failed: "failed",
} as const;
export type StatusDoiTSignupApi =
  | (typeof StatusDoiTSignupApi)[keyof typeof StatusDoiTSignupApi]
  | (string & {});

export const statusDoiTSignupApiSchema: EnumSchema<StatusDoiTSignupApi> =
  s.enumOf<StatusDoiTSignupApi>(StatusDoiTSignupApi);
