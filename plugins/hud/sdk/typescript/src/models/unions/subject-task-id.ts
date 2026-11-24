import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SubjectTaskId = string;

export const subjectTaskIdSchema: Schema<SubjectTaskId> = s.of<SubjectTaskId>(s.union([s.string()]));
