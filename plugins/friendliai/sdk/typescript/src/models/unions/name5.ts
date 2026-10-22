import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tool name to force when `type=tool`. Ignored for other `type` values. */
export type Name5 = string;

export const name5Schema: Schema<Name5> = s.of<Name5>(s.union([s.string()]));
