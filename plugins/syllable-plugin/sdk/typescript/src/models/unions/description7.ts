import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Description of the language group. */
export type Description7 = string;

export const description7Schema: Schema<Description7> = s.of<Description7>(s.union([s.string()]));
