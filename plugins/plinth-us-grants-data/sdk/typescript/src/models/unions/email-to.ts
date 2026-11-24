import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EmailTo = string[];

export const emailToSchema: Schema<EmailTo> = s.of<EmailTo>(s.union([s.array(s.string())]));
