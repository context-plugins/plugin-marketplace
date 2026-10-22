import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the initial backup operation. */
export const InitialBackupStatusEnum = {
  Pending: "pending",
  Active: "active",
  Completed: "completed",
  Failed: "failed",
} as const;
export type InitialBackupStatusEnum =
  | (typeof InitialBackupStatusEnum)[keyof typeof InitialBackupStatusEnum]
  | (string & {});

export const initialBackupStatusEnumSchema: EnumSchema<InitialBackupStatusEnum> =
  s.enumOf<InitialBackupStatusEnum>(InitialBackupStatusEnum);
