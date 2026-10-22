import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The cursor pointing at the next page of items. */
export type NextCursor = string;

export const nextCursorSchema: Schema<NextCursor> = s.of<NextCursor>(s.union([s.string()]));
