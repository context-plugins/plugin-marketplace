import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { org6Schema, type Org6 } from "./org6.js";
import { roleTypeSchema, type RoleType } from "./role-type.js";
import { role9Schema, type Role9 } from "./role9.js";

export type Role8 = {
  roleType: RoleType;
  role: Role9;
  org: Org6;
  userProfile?: string;
  beginDate: string | null;
  endDate: string | null;
};

export const role8Schema: Schema<Role8> = s.object<Role8>({
  roleType: roleTypeSchema,
  role: role9Schema,
  org: org6Schema,
  userProfile: s.optional(s.string()),
  beginDate: s.nullable(s.string()),
  endDate: s.nullable(s.string()),
});
