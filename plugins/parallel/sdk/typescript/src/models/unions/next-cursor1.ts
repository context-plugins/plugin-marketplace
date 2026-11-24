import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Opaque pagination token. Pass as `cursor` to retrieve the next page. Absent when there are no
 * more pages.
 */
export type NextCursor1 = string;

export const nextCursor1Schema: Schema<NextCursor1> = s.of<NextCursor1>(s.union([s.string()]));
