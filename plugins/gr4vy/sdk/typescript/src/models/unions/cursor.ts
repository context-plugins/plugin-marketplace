import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A pointer to the page of results to return. */
export type Cursor = string;

export const cursorSchema: Schema<Cursor> = s.of<Cursor>(s.union([s.string()]));
