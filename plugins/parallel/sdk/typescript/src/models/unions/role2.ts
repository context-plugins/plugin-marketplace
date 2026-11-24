import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { roleSchema, type Role } from "../role.js";

export type Role2 = Role;

export const role2Schema: Schema<Role2> = s.of<Role2>(s.union([s.lazy(() => roleSchema)]));
