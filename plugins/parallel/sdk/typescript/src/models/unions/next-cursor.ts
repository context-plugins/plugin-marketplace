import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Pass as `cursor` to retrieve more events. Absent when there are no more events. */
export type NextCursor = string;

export const nextCursorSchema: Schema<NextCursor> = s.of<NextCursor>(s.union([s.string()]));
