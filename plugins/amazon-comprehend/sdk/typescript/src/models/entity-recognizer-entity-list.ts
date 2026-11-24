import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntityRecognizerEntityList = {
  /**
   * Specifies the Amazon S3 location where the entity list is located. The URI must be in the same
   * Region as the API endpoint that you are calling.
   */
  s3Uri: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerEntityListSchema: Schema<EntityRecognizerEntityList> =
  s.object<EntityRecognizerEntityList>(
    {
      s3Uri: s.string(),
      _keysMap: {
        s3Uri: "S3Uri",
      },
    },
    { additionalProperties: s.json() },
  );
