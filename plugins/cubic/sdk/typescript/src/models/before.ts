import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type Before = {
  seat: boolean;
  role: Role;
};

export const beforeSchema: Schema<Before> = s.object<Before>({
  seat: s.boolean(),
  role: roleSchema,
});
