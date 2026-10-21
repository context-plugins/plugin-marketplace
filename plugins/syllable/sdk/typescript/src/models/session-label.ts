import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comments4Schema, type Comments4 } from "./unions/comments4.js";
import { issueCategoriesSchema, type IssueCategories } from "./unions/issue-categories.js";

/**
 * Response model for session label operations. A session label is associated with a given session
 * and contains an evaluation of quality and descriptions of issues the user encountered in that
 * session or other details.
 */
export type SessionLabel = {
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
  /** The internal ID of the label */
  id: number;
  /** The timestamp at which the label was created */
  timestamp: string;
};

export const sessionLabelSchema: Schema<SessionLabel> = s.object<SessionLabel>({
  sessionId: s.int(),
  type: s.string(),
  code: s.string(),
  userEmail: s.string(),
  comments: s.optional(s.lazy(() => comments4Schema)),
  issueCategories: s.optional(s.lazy(() => issueCategoriesSchema)),
  id: s.int(),
  timestamp: s.string(),
  _keysMap: {
    sessionId: "session_id",
    userEmail: "user_email",
    issueCategories: "issue_categories",
  },
});
