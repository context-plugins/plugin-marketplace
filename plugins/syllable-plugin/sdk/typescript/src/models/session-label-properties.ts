import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SessionLabelProperties = {
  Timestamp: "timestamp",
  SessionId: "session_id",
  Type: "type",
  Code: "code",
  UserEmail: "user_email",
  IssueCategories: "issue_categories",
  SessionIdList: "session_id_list",
} as const;
export type SessionLabelProperties =
  | (typeof SessionLabelProperties)[keyof typeof SessionLabelProperties]
  | (string & {});

export const sessionLabelPropertiesSchema: EnumSchema<SessionLabelProperties> =
  s.enumOf<SessionLabelProperties>(SessionLabelProperties);
