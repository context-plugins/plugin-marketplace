import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The next cursor for pagination. */
export type NextCursor = Uint8Array;

export const nextCursorSchema: Schema<NextCursor> = s.of<NextCursor>(s.union([s.bytes()]));
