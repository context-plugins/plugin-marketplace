import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The first name(s) or given name of the passenger. */
export type FirstName1 = string;

export const firstName1Schema: Schema<FirstName1> = s.of<FirstName1>(s.union([s.string()]));
