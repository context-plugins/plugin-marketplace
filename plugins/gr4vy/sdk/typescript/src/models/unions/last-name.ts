import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The account holder's last name */
export type LastName = string;

export const lastNameSchema: Schema<LastName> = s.of<LastName>(s.union([s.string()]));
