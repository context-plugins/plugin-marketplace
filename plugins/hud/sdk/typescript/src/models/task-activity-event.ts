import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { byAvatarUrlSchema, type ByAvatarUrl } from "./unions/by-avatar-url.js";
import { byNameSchema, type ByName } from "./unions/by-name.js";
import { byRoleSchema, type ByRole } from "./unions/by-role.js";
import { bySchema, type By } from "./unions/by.js";
import { doneSchema, type Done } from "./unions/done.js";
import { keySchema, type Key } from "./unions/key.js";
import { summarySchema, type Summary } from "./unions/summary.js";
import { versionSchema, type Version } from "./unions/version.js";

export type TaskActivityEvent = {
  event: string;
  at: string;
  by?: By;
  byName?: ByName;
  byAvatarUrl?: ByAvatarUrl;
  byRole?: ByRole;
  key?: Key;
  done?: Done;
  summary?: Summary;
  version?: Version;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskActivityEventSchema: Schema<TaskActivityEvent> = s.object<TaskActivityEvent>(
  {
    event: s.string(),
    at: s.string(),
    by: s.optional(s.lazy(() => bySchema)),
    byName: s.optional(s.lazy(() => byNameSchema)),
    byAvatarUrl: s.optional(s.lazy(() => byAvatarUrlSchema)),
    byRole: s.optional(s.lazy(() => byRoleSchema)),
    key: s.optional(s.lazy(() => keySchema)),
    done: s.optional(s.lazy(() => doneSchema)),
    summary: s.optional(s.lazy(() => summarySchema)),
    version: s.optional(s.lazy(() => versionSchema)),
    _keysMap: {
      byName: "by_name",
      byAvatarUrl: "by_avatar_url",
      byRole: "by_role",
    },
  },
  { additionalProperties: s.json() },
);
