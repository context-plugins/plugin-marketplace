import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type X = number;

export const xSchema: Schema<X> = s.of<X>(s.union([s.int()]));
