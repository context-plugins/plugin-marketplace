import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { linkSchema, type Link } from "./link.js";
import { userSchema, type User } from "./user.js";

export type UserRecord = {
  /** Timestamp of the last time this user was seen */
  lastPing?: Date;
  environmentId?: string;
  ownerId?: string;
  user?: User;
  /**
   * If this record is returned as part of a list, the value used to sort the list. This is only
   * included when the <code>sort</code> query parameter is specified. It is a time, in Unix
   * milliseconds, if the sort is by <code>lastSeen</code>. It is a user key if the sort is by
   * <code>userKey</code>.
   */
  sortValue?: Record<string, unknown>;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  access?: Access;
};

export const userRecordSchema: Schema<UserRecord> = s.object<UserRecord>({
  lastPing: s.optional(s.dateTime()),
  environmentId: s.optional(s.string()),
  ownerId: s.optional(s.string()),
  user: s.optional(s.lazy(() => userSchema)),
  sortValue: s.optional(s.record(s.string(), s.unknown())),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  access: s.optional(s.lazy(() => accessSchema)),
  _keysMap: {
    links: "_links",
    access: "_access",
  },
});
