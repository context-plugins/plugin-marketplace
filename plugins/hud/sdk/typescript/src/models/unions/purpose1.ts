import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Purpose1 = string;

export const purpose1Schema: Schema<Purpose1> = s.of<Purpose1>(s.union([s.string()]));
