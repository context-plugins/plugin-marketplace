import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateCollectionResponse = {
  /** HTTP status code indicating the result of the operation. */
  statusCode?: number;
  /**
   * Amazon Resource Name (ARN) of the collection. You can use this to manage permissions on your
   * resources.
   */
  collectionArn?: string;
  /** Version number of the face detection model associated with the collection you are creating. */
  faceModelVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCollectionResponseSchema: Schema<CreateCollectionResponse> =
  s.object<CreateCollectionResponse>(
    {
      statusCode: s.optional(s.int()),
      collectionArn: s.optional(s.string()),
      faceModelVersion: s.optional(s.string()),
      _keysMap: {
        statusCode: "StatusCode",
        collectionArn: "CollectionArn",
        faceModelVersion: "FaceModelVersion",
      },
    },
    { additionalProperties: s.json() },
  );
