import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The last name, or family name, of the passenger. */
export type LastName1 = string;

export const lastName1Schema: Schema<LastName1> = s.of<LastName1>(s.union([s.string()]));
