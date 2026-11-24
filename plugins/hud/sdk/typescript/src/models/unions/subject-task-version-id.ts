import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SubjectTaskVersionId = string;

export const subjectTaskVersionIdSchema: Schema<SubjectTaskVersionId> = s.of<SubjectTaskVersionId>(
  s.union([s.string()]),
);
