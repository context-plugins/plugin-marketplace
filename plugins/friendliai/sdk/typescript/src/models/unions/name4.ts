import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name of the function to call. */
export type Name4 = string;

export const name4Schema: Schema<Name4> = s.of<Name4>(s.union([s.string()]));
