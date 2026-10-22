import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Target name to save (defaults to global variable). */
export type Name1 = string;

export const name1Schema: Schema<Name1> = s.of<Name1>(s.union([s.string()]));
