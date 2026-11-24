import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * "pending": The job is running "success": The job is finished "failed": The job could not be
 * completed "cancelled": The job was cancelled before it finished
 */
export const AudienceSizeStatus1 = {
  Pending: "pending",
  Success: "success",
  Failed: "failed",
  Cancelled: "cancelled",
} as const;
export type AudienceSizeStatus1 =
  | (typeof AudienceSizeStatus1)[keyof typeof AudienceSizeStatus1]
  | (string & {});

export const audienceSizeStatus1Schema: EnumSchema<AudienceSizeStatus1> =
  s.enumOf<AudienceSizeStatus1>(AudienceSizeStatus1);
