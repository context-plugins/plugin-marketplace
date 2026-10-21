import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Mode of the campaign (e.g. voice, sms, email) */
export type Mode1 = string;

export const mode1Schema: Schema<Mode1> = s.of<Mode1>(s.union([s.string()]));
