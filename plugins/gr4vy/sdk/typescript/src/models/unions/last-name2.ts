import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The last name, or family name, of the buyer. */
export type LastName2 = string;

export const lastName2Schema: Schema<LastName2> = s.of<LastName2>(s.union([s.string()]));
