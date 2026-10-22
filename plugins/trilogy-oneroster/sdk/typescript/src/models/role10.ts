import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { org5Schema, type Org5 } from "./org5.js";
import { roleTypeSchema, type RoleType } from "./role-type.js";
import { role9Schema, type Role9 } from "./role9.js";

export type Role10 = {
  roleType: RoleType;
  role: Role9;
  org: Org5;
  userProfile?: string;
  beginDate?: string;
  endDate?: string;
};

export const role10Schema: Schema<Role10> = s.object<Role10>({
  roleType: roleTypeSchema,
  role: role9Schema,
  org: org5Schema,
  userProfile: s.optional(s.string()),
  beginDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
});
