import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type MemberTeamSummaryRep = {
  /** A list of keys of the custom roles this team has access to */
  customRoleKeys: string[];
  /** The team key */
  key: string;
  links?: Record<string, Link>;
  /** The team name */
  name: string;
};

export const memberTeamSummaryRepSchema: Schema<MemberTeamSummaryRep> = s.object<MemberTeamSummaryRep>({
  customRoleKeys: s.array(s.string()),
  key: s.string(),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  name: s.string(),
  _keysMap: {
    links: "_links",
  },
});
