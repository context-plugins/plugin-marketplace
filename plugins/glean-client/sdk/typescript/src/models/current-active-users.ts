import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CurrentActiveUsers = {
  /** Number of current Monthly Active Users. */
  monthlyActiveUsers?: number;
  /** Number of current Weekly Active Users. */
  weeklyActiveUsers?: number;
};

export const currentActiveUsersSchema: Schema<CurrentActiveUsers> = s.object<CurrentActiveUsers>({
  monthlyActiveUsers: s.optional(s.int()),
  weeklyActiveUsers: s.optional(s.int()),
});
