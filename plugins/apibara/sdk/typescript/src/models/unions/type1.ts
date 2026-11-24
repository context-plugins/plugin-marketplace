import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Type1 = string | string[];

export const type1Schema: Schema<Type1> = s.of<Type1>(s.union([s.string(), s.array(s.string())]));
