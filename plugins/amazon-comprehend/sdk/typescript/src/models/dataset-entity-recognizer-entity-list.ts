import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetEntityRecognizerEntityList = {
  /** Specifies the Amazon S3 location where the entity list is located. */
  s3Uri: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetEntityRecognizerEntityListSchema: Schema<DatasetEntityRecognizerEntityList> =
  s.object<DatasetEntityRecognizerEntityList>(
    {
      s3Uri: s.string(),
      _keysMap: {
        s3Uri: "S3Uri",
      },
    },
    { additionalProperties: s.json() },
  );
