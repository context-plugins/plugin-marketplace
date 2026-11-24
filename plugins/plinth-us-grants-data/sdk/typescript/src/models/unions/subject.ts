import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Subject = string;

export const subjectSchema: Schema<Subject> = s.of<Subject>(s.union([s.string()]));
