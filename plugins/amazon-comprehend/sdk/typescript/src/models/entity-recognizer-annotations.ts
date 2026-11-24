import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntityRecognizerAnnotations = {
  /**
   * Specifies the Amazon S3 location where the annotations for an entity recognizer are located.
   * The URI must be in the same Region as the API endpoint that you are calling.
   */
  s3Uri: string;
  /**
   * Specifies the Amazon S3 location where the test annotations for an entity recognizer are
   * located. The URI must be in the same Region as the API endpoint that you are calling.
   */
  testS3Uri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerAnnotationsSchema: Schema<EntityRecognizerAnnotations> =
  s.object<EntityRecognizerAnnotations>(
    {
      s3Uri: s.string(),
      testS3Uri: s.optional(s.string()),
      _keysMap: {
        s3Uri: "S3Uri",
        testS3Uri: "TestS3Uri",
      },
    },
    { additionalProperties: s.json() },
  );
