import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type MemberSummary = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
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

export const memberSummarySchema: Schema<MemberSummary> = s.object<MemberSummary>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
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
