import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Time to live for SMS session in minutes */
export type SmsSessionTtl = number;

export const smsSessionTtlSchema: Schema<SmsSessionTtl> = s.of<SmsSessionTtl>(s.union([s.int()]));
