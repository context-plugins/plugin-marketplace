import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classifierTypeSchema, type ClassifierType } from "./classifier-type.js";

/** A model that classifies documents into predefined document types */
export type Classifier = {
  /** Unique identifier of the classifier */
  id?: string;
  /** Display name of the classifier */
  name?: string;
  /** Technology category of the classifier model */
  classifierType?: ClassifierType;
  /** List of document type labels this classifier can identify */
  documentTypes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classifierSchema: Schema<Classifier> = s.object<Classifier>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    classifierType: s.optional(s.lazy(() => classifierTypeSchema)),
    documentTypes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
