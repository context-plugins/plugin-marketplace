import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind22Schema, type Kind22 } from "./kind22.js";
import { viewsMemberSummarySchema, type ViewsMemberSummary } from "./views-member-summary.js";
import {
  viewsMemberTeamSummaryRepSchema,
  type ViewsMemberTeamSummaryRep,
} from "./views-member-team-summary-rep.js";

export type ExpandedFlagMaintainer = {
  /** The ID of the maintainer member, or the key of the maintainer team */
  key: string;
  /** The type of the maintainer */
  kind: Kind22;
  member?: ViewsMemberSummary;
  team?: ViewsMemberTeamSummaryRep;
};

export const expandedFlagMaintainerSchema: Schema<ExpandedFlagMaintainer> = s.object<ExpandedFlagMaintainer>({
  key: s.string(),
  kind: kind22Schema,
  member: s.optional(s.lazy(() => viewsMemberSummarySchema)),
  team: s.optional(s.lazy(() => viewsMemberTeamSummaryRepSchema)),
  _keysMap: {
    member: "_member",
    team: "_team",
  },
});
