import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SubjectTraceId = string;

export const subjectTraceIdSchema: Schema<SubjectTraceId> = s.of<SubjectTraceId>(s.union([s.string()]));
