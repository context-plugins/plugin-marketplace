import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** activity (default: email only when something changed) | always. */
export type EmailMode1 = string;

export const emailMode1Schema: Schema<EmailMode1> = s.of<EmailMode1>(s.union([s.string()]));
