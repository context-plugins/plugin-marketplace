import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Deprecated field used to define the order in which to process payment services */
export type Position = number;

export const positionSchema: Schema<Position> = s.of<Position>(s.union([s.int()]));
