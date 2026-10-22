import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewsLinkSchema, type ViewsLink } from "./views-link.js";

export type ViewsMemberTeamSummaryRep = {
  /** A list of keys of the custom roles this team has access to */
  customRoleKeys: string[];
  /** The team key */
  key: string;
  links?: Record<string, ViewsLink>;
  /** The team name */
  name: string;
};

export const viewsMemberTeamSummaryRepSchema: Schema<ViewsMemberTeamSummaryRep> =
  s.object<ViewsMemberTeamSummaryRep>({
    customRoleKeys: s.array(s.string()),
    key: s.string(),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => viewsLinkSchema),
      ),
    ),
    name: s.string(),
    _keysMap: {
      links: "_links",
    },
  });
