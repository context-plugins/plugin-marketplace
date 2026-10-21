import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The version of 3DS used for this transaction. */
export type Version1 = string;

export const version1Schema: Schema<Version1> = s.of<Version1>(s.union([s.string()]));
