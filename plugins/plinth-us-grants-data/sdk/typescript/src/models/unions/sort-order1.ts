import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SortOrder1 = string;

export const sortOrder1Schema: Schema<SortOrder1> = s.of<SortOrder1>(s.union([s.string()]));
