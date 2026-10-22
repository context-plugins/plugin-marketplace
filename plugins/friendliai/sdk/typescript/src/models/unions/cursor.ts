import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Cursor for pagination. */
export type Cursor = Uint8Array;

export const cursorSchema: Schema<Cursor> = s.of<Cursor>(s.union([s.bytes()]));
