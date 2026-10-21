import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Role of the generated message author, in this case `assistant`. */
export type Role2 = string;

export const role2Schema: Schema<Role2> = s.of<Role2>(s.union([s.string()]));
