import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events for local users and groups */
export type UsersGroups = {
  /** Enabled */
  enable?: boolean;
};

export const usersGroupsSchema: Schema<UsersGroups> = s.object<UsersGroups>({
  enable: s.optional(s.boolean()),
});
