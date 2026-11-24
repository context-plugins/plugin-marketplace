import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Lng = number;

export const lngSchema: Schema<Lng> = s.of<Lng>(s.union([s.float64()]));
