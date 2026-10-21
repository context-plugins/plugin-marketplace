import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action18 = {
  ServerError: "SERVER_ERROR",
  NoAction: "NO_ACTION",
  Notification: "NOTIFICATION",
} as const;
export type Action18 = (typeof Action18)[keyof typeof Action18] | (string & {});

export const action18Schema: EnumSchema<Action18> = s.enumOf<Action18>(Action18);
