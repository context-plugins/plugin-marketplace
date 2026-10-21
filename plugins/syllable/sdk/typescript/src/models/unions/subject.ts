import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Email subject. Required for email_template (in type_config); ignored otherwise. */
export type Subject = string;

export const subjectSchema: Schema<Subject> = s.of<Subject>(s.union([s.string()]));
