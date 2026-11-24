import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Keyset cursor from a prior response. */
export type Cursor = string;

export const cursorSchema: Schema<Cursor> = s.of<Cursor>(s.union([s.string()]));
