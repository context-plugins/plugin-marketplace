import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** File mode of the original file. May be an array for combined diffs. */
export type OldMode = string | string[];

export const oldModeSchema: Schema<OldMode> = s.of<OldMode>(s.union([s.string(), s.array(s.string())]));
