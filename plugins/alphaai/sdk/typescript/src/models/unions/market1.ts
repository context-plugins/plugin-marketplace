import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Market1 = string;

export const market1Schema: Schema<Market1> = s.of<Market1>(s.union([s.string()]));
