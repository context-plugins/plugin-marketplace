import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type After = {
  seat: boolean;
  role: Role;
};

export const afterSchema: Schema<After> = s.object<After>({
  seat: s.boolean(),
  role: roleSchema,
});
