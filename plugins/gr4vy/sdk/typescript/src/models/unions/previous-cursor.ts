import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The cursor pointing at the previous page of items. */
export type PreviousCursor = string;

export const previousCursorSchema: Schema<PreviousCursor> = s.of<PreviousCursor>(s.union([s.string()]));
