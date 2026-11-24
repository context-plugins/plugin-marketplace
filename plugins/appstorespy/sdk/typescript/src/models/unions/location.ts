import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Location = string | number;

export const locationSchema: Schema<Location> = s.of<Location>(s.union([s.string(), s.int()]));
