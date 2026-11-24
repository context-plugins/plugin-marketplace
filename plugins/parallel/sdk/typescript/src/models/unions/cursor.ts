import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Pagination token from `next_cursor` in a previous response. Omit to start from the most recently
 * created monitor.
 */
export type Cursor = string;

export const cursorSchema: Schema<Cursor> = s.of<Cursor>(s.union([s.string()]));
