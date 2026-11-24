import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkSubjectTypeSchema, type CheckSubjectType } from "./check-subject-type.js";

/** Request to execute one check against one resource. */
export type CheckRunRequest = {
  /** Platform resources supported by the check framework. */
  subjectType: CheckSubjectType;
  subjectId: string;
  /** @default false */
  overwrite?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkRunRequestSchema: Schema<CheckRunRequest> = s.object<CheckRunRequest>(
  {
    subjectType: checkSubjectTypeSchema,
    subjectId: s.string(),
    overwrite: s.defaulted(s.boolean(), false),
    _keysMap: {
      subjectType: "subject_type",
      subjectId: "subject_id",
    },
  },
  { additionalProperties: s.json() },
);
