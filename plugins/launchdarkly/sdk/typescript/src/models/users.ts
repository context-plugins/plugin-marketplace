import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { userRecordSchema, type UserRecord } from "./user-record.js";

export type Users = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** The total number of users in the environment */
  totalCount: number;
  /** Details on the users */
  items: UserRecord[];
};

export const usersSchema: Schema<Users> = s.object<Users>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  totalCount: s.int(),
  items: s.array(s.lazy(() => userRecordSchema)),
  _keysMap: {
    links: "_links",
  },
});
