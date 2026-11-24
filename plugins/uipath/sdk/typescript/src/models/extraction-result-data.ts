import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  extractedFieldInternalSchema,
  extractedFieldSchema,
  type ExtractedField,
} from "./extracted-field.js";

/** Structured extraction result containing field values and confidence scores */
export type ExtractionResultData = {
  /** Version of the extraction results format */
  resultsVersion?: number;
  /** Document identifier of the extracted document */
  documentId?: string;
  /** List of extracted field values */
  fields?: ExtractedField[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const extractionResultDataProperties: s.Shape<ExtractionResultData> = {
  resultsVersion: s.optional(s.int()),
  documentId: s.optional(s.string()),
  fields: s.optional(s.array(s.lazy(() => extractedFieldInternalSchema))),
  _keysMap: {
    resultsVersion: "ResultsVersion",
    documentId: "DocumentId",
    fields: "Fields",
  },
};

export const extractionResultDataInternalSchema: Schema<ExtractionResultData> =
  s.object<ExtractionResultData>(extractionResultDataProperties, { additionalProperties: s.json() });

export const extractionResultDataSchema: Schema<ExtractionResultData> = s.lazySchema(() =>
  s.object<ExtractionResultData>(
    {
      ...extractionResultDataProperties,
      fields: s.optional(s.array(s.lazy(() => extractedFieldSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
