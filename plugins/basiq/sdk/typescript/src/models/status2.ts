import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the connection status, available only for SERVER_SCOPE. */
export const Status2 = {
  Active: "active",
  Pending: "pending",
  Invalid: "invalid",
  PreInit: "pre-init",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
