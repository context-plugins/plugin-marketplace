import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customRoleSchema, type CustomRole } from "./custom-role.js";
import { linkSchema, type Link } from "./link.js";

export type CustomRoles = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** An array of custom roles */
  items: CustomRole[];
  /** The total number of custom roles */
  totalCount?: number;
};

export const customRolesSchema: Schema<CustomRoles> = s.object<CustomRoles>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  items: s.array(s.lazy(() => customRoleSchema)),
  totalCount: s.optional(s.int()),
  _keysMap: {
    links: "_links",
  },
});
