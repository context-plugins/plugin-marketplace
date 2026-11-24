import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Classification result for a specific document or page range */
export type ClassificationResultItem = {
  /** Identifier of the classifier that produced this result */
  classifierId?: string;
  /** Identified document type identifier */
  documentTypeId?: string;
  /** Confidence score of the classification result (0.0 to 1.0) */
  confidence?: number;
  /** First page of the classified document section */
  startPage?: number;
  /** Last page of the classified document section */
  endPage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const classificationResultItemProperties: s.Shape<ClassificationResultItem> = {
  classifierId: s.optional(s.string()),
  documentTypeId: s.optional(s.string()),
  confidence: s.optional(s.float64()),
  startPage: s.optional(s.int()),
  endPage: s.optional(s.int()),
};

export const classificationResultItemInternalSchema: Schema<ClassificationResultItem> =
  s.object<ClassificationResultItem>(classificationResultItemProperties, { additionalProperties: s.json() });

export const classificationResultItemSchema: Schema<ClassificationResultItem> = s.lazySchema(() =>
  s.object<ClassificationResultItem>(
    {
      ...classificationResultItemProperties,
      confidence: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
