import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Log location type */
export const LogLocationType = {
  Project: "project",
  Organization: "organization",
  BillingAccount: "billingAccount",
  Folder: "folder",
} as const;
export type LogLocationType = (typeof LogLocationType)[keyof typeof LogLocationType] | (string & {});

export const logLocationTypeSchema: EnumSchema<LogLocationType> = s.enumOf<LogLocationType>(LogLocationType);
