import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewsLinkSchema, type ViewsLink } from "./views-link.js";

export type ViewsMemberSummary = {
  /** The location and content type of related resources */
  links: Record<string, ViewsLink>;
  /** The member's ID */
  id: string;
  /** The member's first name */
  firstName?: string;
  /** The member's last name */
  lastName?: string;
  /** The member's base role. If the member has no additional roles, this role will be in effect. */
  role: string;
  /** The member's email address */
  email: string;
};

export const viewsMemberSummarySchema: Schema<ViewsMemberSummary> = s.object<ViewsMemberSummary>({
  links: s.record(
    s.string(),
    s.lazy(() => viewsLinkSchema),
  ),
  id: s.string(),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  role: s.string(),
  email: s.string(),
  _keysMap: {
    links: "_links",
    id: "_id",
  },
});
