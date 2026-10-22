import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { assignedToRepSchema, type AssignedToRep } from "./assigned-to-rep.js";
import { linkSchema, type Link } from "./link.js";
import { statementSchema, type Statement } from "./statement.js";

export type CustomRole = {
  /** The ID of the custom role */
  id: string;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  access?: Access;
  /** The description of the custom role */
  description?: string;
  /** The key of the custom role */
  key: string;
  /** The name of the custom role */
  name: string;
  /** An array of the policies that comprise this custom role */
  policy: Statement[];
  basePermissions?: string;
  resourceCategory?: string;
  assignedTo?: AssignedToRep;
  /** If created from a preset, the preset bundle version */
  presetBundleVersion?: number;
  /** If created from a preset, the read-only statements copied from the preset */
  presetStatements?: Statement[];
};

export const customRoleSchema: Schema<CustomRole> = s.object<CustomRole>({
  id: s.string(),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  access: s.optional(s.lazy(() => accessSchema)),
  description: s.optional(s.string()),
  key: s.string(),
  name: s.string(),
  policy: s.array(s.lazy(() => statementSchema)),
  basePermissions: s.optional(s.string()),
  resourceCategory: s.optional(s.string()),
  assignedTo: s.optional(s.lazy(() => assignedToRepSchema)),
  presetBundleVersion: s.optional(s.int()),
  presetStatements: s.optional(s.array(s.lazy(() => statementSchema))),
  _keysMap: {
    id: "_id",
    links: "_links",
    access: "_access",
    presetBundleVersion: "_presetBundleVersion",
    presetStatements: "_presetStatements",
  },
});
