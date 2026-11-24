import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classifierOptionSchema, type ClassifierOption } from "./classifier-option.js";

/** Request payload for classifying a previously digitized document */
export type ClassificationRequest = {
  /** Document ID returned by the digitization endpoint */
  documentId: string;
  /** Classifiers to apply with their configuration options */
  classifiersOptions: ClassifierOption[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationRequestSchema: Schema<ClassificationRequest> = s.object<ClassificationRequest>(
  {
    documentId: s.string(),
    classifiersOptions: s.array(s.lazy(() => classifierOptionSchema)),
  },
  { additionalProperties: s.json() },
);
