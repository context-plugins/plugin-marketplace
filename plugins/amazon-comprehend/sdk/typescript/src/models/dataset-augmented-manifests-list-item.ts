import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentType1Schema, type DocumentType1 } from "./document-type1.js";

export type DatasetAugmentedManifestsListItem = {
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
  /** The Amazon S3 location of the augmented manifest file. */
  s3Uri: string;
  /** The S3 prefix to the annotation files that are referred in the augmented manifest file. */
  annotationDataS3Uri?: string;
  /**
   * The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.
   */
  sourceDocumentsS3Uri?: string;
  /**
   * The type of augmented manifest. If you don't specify, the default is PlainTextDocument.
   * PLAIN_TEXT_DOCUMENT A document type that represents any unicode text that is encoded in UTF-8.
   */
  documentType?: DocumentType1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetAugmentedManifestsListItemSchema: Schema<DatasetAugmentedManifestsListItem> =
  s.object<DatasetAugmentedManifestsListItem>(
    {
      attributeNames: s.array(s.string()),
      s3Uri: s.string(),
      annotationDataS3Uri: s.optional(s.string()),
      sourceDocumentsS3Uri: s.optional(s.string()),
      documentType: s.optional(s.lazy(() => documentType1Schema)),
      _keysMap: {
        attributeNames: "AttributeNames",
        s3Uri: "S3Uri",
        annotationDataS3Uri: "AnnotationDataS3Uri",
        sourceDocumentsS3Uri: "SourceDocumentsS3Uri",
        documentType: "DocumentType",
      },
    },
    { additionalProperties: s.json() },
  );
