import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Search1 = string;

export const search1Schema: Schema<Search1> = s.of<Search1>(s.union([s.string()]));
