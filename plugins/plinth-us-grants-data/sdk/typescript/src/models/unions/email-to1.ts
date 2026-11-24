import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Up to 5 addresses for digest delivery. */
export type EmailTo1 = string[];

export const emailTo1Schema: Schema<EmailTo1> = s.of<EmailTo1>(s.union([s.array(s.string())]));
