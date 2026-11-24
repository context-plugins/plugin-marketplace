import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  augmentedManifestsListItemSchema,
  type AugmentedManifestsListItem,
} from "./augmented-manifests-list-item.js";
import { dataFormat1Schema, type DataFormat1 } from "./data-format1.js";
import {
  documentClassifierDocumentsSchema,
  type DocumentClassifierDocuments,
} from "./document-classifier-documents.js";
import { documentReaderConfigSchema, type DocumentReaderConfig } from "./document-reader-config.js";
import { documentType2Schema, type DocumentType2 } from "./document-type2.js";

export type DocumentClassifierInputDataConfig = {
  /**
   * The format of your training data: COMPREHEND_CSV: A two-column CSV file, where labels are
   * provided in the first column, and documents are provided in the second. If you use this value,
   * you must provide the S3Uri parameter in your request. AUGMENTED_MANIFEST: A labeled dataset
   * that is produced by Amazon SageMaker Ground Truth. This file is in JSON lines format. Each line
   * is a complete JSON object that contains a training document and its associated labels. If you
   * use this value, you must provide the AugmentedManifests parameter in your request. If you don't
   * specify a value, Amazon Comprehend us
   */
  dataFormat?: DataFormat1;
  /**
   * The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API
   * endpoint that you are calling. The URI can point to a single input file or it can provide the
   * prefix for a collection of input files. For example, if you use the URI S3://bucketName/prefix,
   * if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one
   * file begins with the prefix, Amazon Comprehend uses all of them as input. This parameter is
   * required if you set DataFormat to COMPREHEND_CSV.
   */
  s3Uri?: string;
  /**
   * This specifies the Amazon S3 location that contains the test annotations for the document
   * classifier. The URI must be in the same Amazon Web Services Region as the API endpoint that you
   * are calling.
   */
  testS3Uri?: string;
  /**
   * Indicates the delimiter used to separate each label for training a multi-label classifier. The
   * default delimiter between labels is a pipe (|). You can use a different character as a
   * delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the
   * training documents use a delimiter other than the default or the delimiter you specify, the
   * labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.
   */
  labelDelimiter?: string;
  /**
   * A list of augmented manifest files that provide training data for your custom model. An
   * augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
   * This parameter is required if you set DataFormat to AUGMENTED_MANIFEST.
   */
  augmentedManifests?: AugmentedManifestsListItem[];
  /**
   * The type of input documents for training the model. Provide plain-text documents to create a
   * plain-text model, and provide semi-structured documents to create a native document model.
   */
  documentType?: DocumentType2;
  documents?: DocumentClassifierDocuments;
  documentReaderConfig?: DocumentReaderConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentClassifierInputDataConfigSchema: Schema<DocumentClassifierInputDataConfig> =
  s.object<DocumentClassifierInputDataConfig>(
    {
      dataFormat: s.optional(s.lazy(() => dataFormat1Schema)),
      s3Uri: s.optional(s.string()),
      testS3Uri: s.optional(s.string()),
      labelDelimiter: s.optional(s.string()),
      augmentedManifests: s.optional(s.array(s.lazy(() => augmentedManifestsListItemSchema))),
      documentType: s.optional(s.lazy(() => documentType2Schema)),
      documents: s.optional(s.lazy(() => documentClassifierDocumentsSchema)),
      documentReaderConfig: s.optional(s.lazy(() => documentReaderConfigSchema)),
      _keysMap: {
        dataFormat: "DataFormat",
        s3Uri: "S3Uri",
        testS3Uri: "TestS3Uri",
        labelDelimiter: "LabelDelimiter",
        augmentedManifests: "AugmentedManifests",
        documentType: "DocumentType",
        documents: "Documents",
        documentReaderConfig: "DocumentReaderConfig",
      },
    },
    { additionalProperties: s.json() },
  );
