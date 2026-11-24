import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ByRole = string;

export const byRoleSchema: Schema<ByRole> = s.of<ByRole>(s.union([s.string()]));
