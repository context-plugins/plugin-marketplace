import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qaSubjectTypeSchema, type QaSubjectType } from "./qa-subject-type.js";

export type QaCheckResponse = {
  key: string;
  /** What a check judges: a completed evaluation trace, or a task's current version. */
  subjectType: QaSubjectType;
  title: string;
  question: string;
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qaCheckResponseSchema: Schema<QaCheckResponse> = s.object<QaCheckResponse>(
  {
    key: s.string(),
    subjectType: qaSubjectTypeSchema,
    title: s.string(),
    question: s.string(),
    description: s.string(),
    _keysMap: {
      subjectType: "subject_type",
    },
  },
  { additionalProperties: s.json() },
);
