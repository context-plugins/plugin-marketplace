import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comments4Schema, type Comments4 } from "./unions/comments4.js";
import { issueCategoriesSchema, type IssueCategories } from "./unions/issue-categories.js";

export type SessionLabelCreate = {
  /** The internal ID of the session (see Session.session_id) */
  sessionId: number;
  /** The type of the label (either "auto-rating" or "human-rating") */
  type: string;
  /** A code describing the quality of the labeled session (either "GOOD", "OK", "BAD", or "N/A") */
  code: string;
  /** The email of the user who created the label */
  userEmail: string;
  /** Comment string describing additional details about the session */
  comments?: Comments4;
  /** Descriptions of issues occurring in the labeled call */
  issueCategories?: IssueCategories;
};

export const sessionLabelCreateSchema: Schema<SessionLabelCreate> = s.object<SessionLabelCreate>({
  sessionId: s.int(),
  type: s.string(),
  code: s.string(),
  userEmail: s.string(),
  comments: s.optional(s.lazy(() => comments4Schema)),
  issueCategories: s.optional(s.lazy(() => issueCategoriesSchema)),
  _keysMap: {
    sessionId: "session_id",
    userEmail: "user_email",
    issueCategories: "issue_categories",
  },
});
