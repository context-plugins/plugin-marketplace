import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultInternalSchema, resultSchema, type Result } from "./result.js";
import {
  statusUiPathDocumentUnderstandingClassificationApiSchema,
  type StatusUiPathDocumentUnderstandingClassificationApi,
} from "./status-ui-path-document-understanding-classification-api.js";

/** Result of an asynchronous classification job */
export type ClassificationResult = {
  /** Unique identifier of the classification job */
  requestId?: string;
  /** Current status of the classification job */
  status?: StatusUiPathDocumentUnderstandingClassificationApi;
  /** Classification output, populated when status is Succeeded */
  result?: Result;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const classificationResultProperties: s.Shape<ClassificationResult> = {
  requestId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusUiPathDocumentUnderstandingClassificationApiSchema)),
  result: s.optional(s.lazy(() => resultInternalSchema)),
};

export const classificationResultInternalSchema: Schema<ClassificationResult> =
  s.object<ClassificationResult>(classificationResultProperties, { additionalProperties: s.json() });

export const classificationResultSchema: Schema<ClassificationResult> = s.lazySchema(() =>
  s.object<ClassificationResult>(
    {
      ...classificationResultProperties,
      result: s.optional(s.lazy(() => resultSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
