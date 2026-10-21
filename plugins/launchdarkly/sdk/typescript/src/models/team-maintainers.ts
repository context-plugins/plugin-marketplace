import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { memberSummarySchema, type MemberSummary } from "./member-summary.js";

export type TeamMaintainers = {
  /** The number of maintainers of the team */
  totalCount?: number;
  /** Details on the members that have been assigned as maintainers of the team */
  items?: MemberSummary[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const teamMaintainersSchema: Schema<TeamMaintainers> = s.object<TeamMaintainers>({
  totalCount: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => memberSummarySchema))),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  _keysMap: {
    links: "_links",
  },
});
