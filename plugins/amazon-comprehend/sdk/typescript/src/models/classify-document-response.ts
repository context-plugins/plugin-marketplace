import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentClassSchema, type DocumentClass } from "./document-class.js";
import { documentLabelSchema, type DocumentLabel } from "./document-label.js";
import { documentMetadataSchema, type DocumentMetadata } from "./document-metadata.js";
import { documentTypeListItemSchema, type DocumentTypeListItem } from "./document-type-list-item.js";
import { errorsListItemSchema, type ErrorsListItem } from "./errors-list-item.js";
import { warningsListItemSchema, type WarningsListItem } from "./warnings-list-item.js";

export type ClassifyDocumentResponse = {
  /**
   * The classes used by the document being analyzed. These are used for models trained in
   * multi-class mode. Individual classes are mutually exclusive and each document is expected to
   * have only a single class assigned to it. For example, an animal can be a dog or a cat, but not
   * both at the same time. For prompt safety classification, the response includes only two classes
   * (SAFE_PROMPT and UNSAFE_PROMPT), along with a confidence score for each class. The value range
   * of the score is zero to one, where one is the highest confidence.
   */
  classes?: DocumentClass[];
  /**
   * The labels used in the document being analyzed. These are used for multi-label trained models.
   * Individual labels represent different categories that are related in some manner and are not
   * mutually exclusive. For example, a movie can be just an action movie, or it can be an action
   * movie, a science fiction movie, and a comedy, all at the same time.
   */
  labels?: DocumentLabel[];
  documentMetadata?: DocumentMetadata;
  /**
   * The document type for each page in the input document. This field is present in the response
   * only if your request includes the Byte parameter.
   */
  documentType?: DocumentTypeListItem[];
  /**
   * Page-level errors that the system detected while processing the input document. The field is
   * empty if the system encountered no errors.
   */
  errors?: ErrorsListItem[];
  /**
   * Warnings detected while processing the input document. The response includes a warning if there
   * is a mismatch between the input document type and the model type associated with the endpoint
   * that you specified. The response can also include warnings for individual pages that have a
   * mismatch. The field is empty if the system generated no warnings.
   */
  warnings?: WarningsListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classifyDocumentResponseSchema: Schema<ClassifyDocumentResponse> =
  s.object<ClassifyDocumentResponse>(
    {
      classes: s.optional(s.array(s.lazy(() => documentClassSchema))),
      labels: s.optional(s.array(s.lazy(() => documentLabelSchema))),
      documentMetadata: s.optional(s.lazy(() => documentMetadataSchema)),
      documentType: s.optional(s.array(s.lazy(() => documentTypeListItemSchema))),
      errors: s.optional(s.array(s.lazy(() => errorsListItemSchema))),
      warnings: s.optional(s.array(s.lazy(() => warningsListItemSchema))),
      _keysMap: {
        classes: "Classes",
        labels: "Labels",
        documentMetadata: "DocumentMetadata",
        documentType: "DocumentType",
        errors: "Errors",
        warnings: "Warnings",
      },
    },
    { additionalProperties: s.json() },
  );
