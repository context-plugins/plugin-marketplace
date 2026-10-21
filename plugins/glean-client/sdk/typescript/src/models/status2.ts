import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Auth status of the tool. */
export const Status2 = {
  AwaitingAuth: "AWAITING_AUTH",
  Authorized: "AUTHORIZED",
  AuthDisabled: "AUTH_DISABLED",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
