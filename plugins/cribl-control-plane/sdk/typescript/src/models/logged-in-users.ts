import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events from list of logged-in users */
export type LoggedInUsers = {
  /** Enabled */
  enable?: boolean;
};

export const loggedInUsersSchema: Schema<LoggedInUsers> = s.object<LoggedInUsers>({
  enable: s.optional(s.boolean()),
});
