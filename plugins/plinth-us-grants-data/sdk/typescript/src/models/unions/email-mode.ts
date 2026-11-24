import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EmailMode = string;

export const emailModeSchema: Schema<EmailMode> = s.of<EmailMode>(s.union([s.string()]));
