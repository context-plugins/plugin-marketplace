import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Deprecated model version retained for backward compatibility. */
export type Version5 = string;

export const version5Schema: Schema<Version5> = s.of<Version5>(s.union([s.string()]));
