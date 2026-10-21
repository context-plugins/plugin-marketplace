import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether to enforce strict parameter validation. Default `true`. */
export type Strict1 = boolean;

export const strict1Schema: Schema<Strict1> = s.of<Strict1>(s.union([s.boolean()]));
