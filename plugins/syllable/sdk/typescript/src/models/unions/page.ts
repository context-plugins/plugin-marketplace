import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The page number from which to start (0-based) */
export type Page = number;

export const pageSchema: Schema<Page> = s.of<Page>(s.union([s.int()]));
