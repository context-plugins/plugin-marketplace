import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AudienceSizeStatus = {
  Pending: "pending",
  Success: "success",
  Failed: "failed",
  Cancelled: "cancelled",
} as const;
export type AudienceSizeStatus = (typeof AudienceSizeStatus)[keyof typeof AudienceSizeStatus] | (string & {});

export const audienceSizeStatusSchema: EnumSchema<AudienceSizeStatus> =
  s.enumOf<AudienceSizeStatus>(AudienceSizeStatus);
