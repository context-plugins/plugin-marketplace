import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Deprecated model version. This value is ignored and resolved automatically. */
export type Version1 = string;

export const version1Schema: Schema<Version1> = s.of<Version1>(s.union([s.string()]));
