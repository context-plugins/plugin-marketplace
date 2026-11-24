import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExactResponseFields = {
  /** The name of the field that contains the query made to the OpenSearch Service database. */
  questionField: string;
  /**
   * The name of the field that contains the answer to the query made to the OpenSearch Service
   * database.
   */
  answerField: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exactResponseFieldsSchema: Schema<ExactResponseFields> = s.object<ExactResponseFields>(
  {
    questionField: s.string(),
    answerField: s.string(),
  },
  { additionalProperties: s.json() },
);
