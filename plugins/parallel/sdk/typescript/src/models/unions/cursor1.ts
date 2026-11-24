import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Pass `next_cursor` from a previous response to retrieve more events. */
export type Cursor1 = string;

export const cursor1Schema: Schema<Cursor1> = s.of<Cursor1>(s.union([s.string()]));
