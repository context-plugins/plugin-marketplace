import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Last name of the buyer to match. */
export type LastName8 = string;

export const lastName8Schema: Schema<LastName8> = s.of<LastName8>(s.union([s.string()]));
