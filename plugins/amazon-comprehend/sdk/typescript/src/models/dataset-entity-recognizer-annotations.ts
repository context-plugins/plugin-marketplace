import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetEntityRecognizerAnnotations = {
  /**
   * Specifies the Amazon S3 location where the training documents for an entity recognizer are
   * located. The URI must be in the same Region as the API endpoint that you are calling.
   */
  s3Uri: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetEntityRecognizerAnnotationsSchema: Schema<DatasetEntityRecognizerAnnotations> =
  s.object<DatasetEntityRecognizerAnnotations>(
    {
      s3Uri: s.string(),
      _keysMap: {
        s3Uri: "S3Uri",
      },
    },
    { additionalProperties: s.json() },
  );
