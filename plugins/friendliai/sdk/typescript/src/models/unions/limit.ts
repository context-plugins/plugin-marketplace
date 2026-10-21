import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Limit of items per page. */
export type Limit = number;

export const limitSchema: Schema<Limit> = s.of<Limit>(s.union([s.int()]));
