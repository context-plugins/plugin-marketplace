import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timestamp of the last modification to the task, as an RFC 3339 string. */
export type ModifiedAt1 = string;

export const modifiedAt1Schema: Schema<ModifiedAt1> = s.of<ModifiedAt1>(s.union([s.string()]));
