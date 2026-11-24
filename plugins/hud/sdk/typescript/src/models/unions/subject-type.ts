import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { checkSubjectTypeSchema, type CheckSubjectType } from "../check-subject-type.js";

export type SubjectType = CheckSubjectType;

export const subjectTypeSchema: Schema<SubjectType> = s.of<SubjectType>(
  s.union([s.lazy(() => checkSubjectTypeSchema)]),
);
