import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { memberSummarySchema, type MemberSummary } from "./member-summary.js";
import { memberTeamSummaryRepSchema, type MemberTeamSummaryRep } from "./member-team-summary-rep.js";

export type MaintainerRep = {
  member?: MemberSummary;
  team?: MemberTeamSummaryRep;
};

export const maintainerRepSchema: Schema<MaintainerRep> = s.object<MaintainerRep>({
  member: s.optional(s.lazy(() => memberSummarySchema)),
  team: s.optional(s.lazy(() => memberTeamSummaryRepSchema)),
});
