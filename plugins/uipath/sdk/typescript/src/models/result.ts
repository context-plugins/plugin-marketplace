import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationResultItemInternalSchema,
  classificationResultItemSchema,
  type ClassificationResultItem,
} from "./classification-result-item.js";

/** Classification output, populated when status is Succeeded */
export type Result = {
  /** Document ID that was classified */
  documentId?: string;
  classificationResults?: ClassificationResultItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const resultProperties: s.Shape<Result> = {
  documentId: s.optional(s.string()),
  classificationResults: s.optional(s.array(s.lazy(() => classificationResultItemInternalSchema))),
};

export const resultInternalSchema: Schema<Result> = s.object<Result>(resultProperties, {
  additionalProperties: s.json(),
});

export const resultSchema: Schema<Result> = s.lazySchema(() =>
  s.object<Result>(
    {
      ...resultProperties,
      classificationResults: s.optional(s.array(s.lazy(() => classificationResultItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
