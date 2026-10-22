import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { memberSummarySchema, type MemberSummary } from "./member-summary.js";
import { tokenSummarySchema, type TokenSummary } from "./token-summary.js";

export type CompletedBy = {
  member?: MemberSummary;
  token?: TokenSummary;
};

export const completedBySchema: Schema<CompletedBy> = s.object<CompletedBy>({
  member: s.optional(s.lazy(() => memberSummarySchema)),
  token: s.optional(s.lazy(() => tokenSummarySchema)),
});
