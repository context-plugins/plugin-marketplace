import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Users with the deleted role will be reassigned to the new role, if a new role ID is provided */
export type NewRoleId = number;

export const newRoleIdSchema: Schema<NewRoleId> = s.of<NewRoleId>(s.union([s.int()]));
