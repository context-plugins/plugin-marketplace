import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RoleIds = string[];

export const roleIdsSchema: Schema<RoleIds> = s.of<RoleIds>(s.union([s.array(s.string())]));
