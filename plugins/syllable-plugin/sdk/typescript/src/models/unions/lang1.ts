import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Language code (transcript events) */
export type Lang1 = string;

export const lang1Schema: Schema<Lang1> = s.of<Lang1>(s.union([s.string()]));
