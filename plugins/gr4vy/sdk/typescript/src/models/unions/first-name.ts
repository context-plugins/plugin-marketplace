import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The account holder's first name */
export type FirstName = string;

export const firstNameSchema: Schema<FirstName> = s.of<FirstName>(s.union([s.string()]));
