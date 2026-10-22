import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Status message if no rules match */
export type Status1 = string;

export const status1Schema: Schema<Status1> = s.of<Status1>(s.union([s.string()]));
