import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Filters = string | string[];

export const filtersSchema: Schema<Filters> = s.of<Filters>(s.union([s.string(), s.array(s.string())]));
