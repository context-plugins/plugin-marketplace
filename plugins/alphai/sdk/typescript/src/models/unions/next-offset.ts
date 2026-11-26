import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type NextOffset = number;

export const nextOffsetSchema: Schema<NextOffset> = s.of<NextOffset>(s.union([s.int()]));
