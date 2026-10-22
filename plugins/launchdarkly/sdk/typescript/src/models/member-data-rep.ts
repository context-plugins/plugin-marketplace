import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type MemberDataRep = {
  links?: Record<string, Link>;
  /** The member ID */
  id?: string;
  /** The member email */
  email?: string;
  /** The member first name */
  firstName?: string;
  /** The member last name */
  lastName?: string;
};

export const memberDataRepSchema: Schema<MemberDataRep> = s.object<MemberDataRep>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  id: s.optional(s.string()),
  email: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  _keysMap: {
    links: "_links",
    id: "_id",
  },
});
