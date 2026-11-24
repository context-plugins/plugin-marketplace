import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentTypeSchema, type DocumentType } from "./document-type.js";
import { splitSchema, type Split } from "./split.js";

export type AugmentedManifestsListItem = {
  /** The Amazon S3 location of the augmented manifest file. */
  s3Uri: string;
  /**
   * The purpose of the data you've provided in the augmented manifest. You can either train or test
   * this data. If you don't specify, the default is train. TRAIN - all of the documents in the
   * manifest will be used for training. If no test documents are provided, Amazon Comprehend will
   * automatically reserve a portion of the training documents for testing. TEST - all of the
   * documents in the manifest will be used for testing.
   */
  split?: Split;
  /**
   * The JSON attribute that contains the annotations for your training documents. The number of
   * attribute names that you specify depends on whether your augmented manifest file is the output
   * of a single labeling job or a chained labeling job. If your file is the output of a single
   * labeling job, specify the LabelAttributeName key that was used when the job was created in
   * Ground Truth. If your file is the output of a chained labeling job, specify the
   * LabelAttributeName key for one or more jobs in the chain. Each LabelAttributeName key provides
   * the annotations from an individual job.
   */
  attributeNames: string[];
  /** The S3 prefix to the annotation files that are referred in the augmented manifest file. */
  annotationDataS3Uri?: string;
  /**
   * The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.
   */
  sourceDocumentsS3Uri?: string;
  /**
   * The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't
   * specify, the default is PlainTextDocument. PLAIN_TEXT_DOCUMENT A document type that represents
   * any unicode text that is encoded in UTF-8. SEMI_STRUCTURED_DOCUMENT A document type with
   * positional and structural context, like a PDF. For training with Amazon Comprehend, only PDFs
   * are supported. For inference, Amazon Comprehend support PDFs, DOCX and TXT.
   */
  documentType?: DocumentType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const augmentedManifestsListItemSchema: Schema<AugmentedManifestsListItem> =
  s.object<AugmentedManifestsListItem>(
    {
      s3Uri: s.string(),
      split: s.optional(s.lazy(() => splitSchema)),
      attributeNames: s.array(s.string()),
      annotationDataS3Uri: s.optional(s.string()),
      sourceDocumentsS3Uri: s.optional(s.string()),
      documentType: s.optional(s.lazy(() => documentTypeSchema)),
      _keysMap: {
        s3Uri: "S3Uri",
        split: "Split",
        attributeNames: "AttributeNames",
        annotationDataS3Uri: "AnnotationDataS3Uri",
        sourceDocumentsS3Uri: "SourceDocumentsS3Uri",
        documentType: "DocumentType",
      },
    },
    { additionalProperties: s.json() },
  );
