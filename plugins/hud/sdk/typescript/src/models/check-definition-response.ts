import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkExecutorTypeSchema, type CheckExecutorType } from "./check-executor-type.js";
import { checkSubjectTypeSchema, type CheckSubjectType } from "./check-subject-type.js";

/** A discoverable platform check definition. */
export type CheckDefinitionResponse = {
  key: string;
  label: string;
  description: string;
  definitionVersion: number;
  subjectTypes: CheckSubjectType[];
  /** Execution mechanisms supported by a check definition. */
  executorType: CheckExecutorType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkDefinitionResponseSchema: Schema<CheckDefinitionResponse> =
  s.object<CheckDefinitionResponse>(
    {
      key: s.string(),
      label: s.string(),
      description: s.string(),
      definitionVersion: s.int(),
      subjectTypes: s.array(s.lazy(() => checkSubjectTypeSchema)),
      executorType: checkExecutorTypeSchema,
      _keysMap: {
        definitionVersion: "definition_version",
        subjectTypes: "subject_types",
        executorType: "executor_type",
      },
    },
    { additionalProperties: s.json() },
  );
