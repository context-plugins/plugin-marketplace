import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeCollectionResponse = {
  /**
   * The number of faces that are indexed into the collection. To index faces into a collection, use
   * IndexFaces.
   */
  faceCount?: number;
  /**
   * The version of the face model that's used by the collection for face detection. For more
   * information, see Model versioning in the Amazon Rekognition Developer Guide.
   */
  faceModelVersion?: string;
  /** The Amazon Resource Name (ARN) of the collection. */
  collectionArn?: string;
  /**
   * The number of milliseconds since the Unix epoch time until the creation of the collection. The
   * Unix epoch time is 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970.
   */
  creationTimestamp?: Date;
  /** The number of UserIDs assigned to the specified colleciton. */
  userCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCollectionResponseSchema: Schema<DescribeCollectionResponse> =
  s.object<DescribeCollectionResponse>(
    {
      faceCount: s.optional(s.int()),
      faceModelVersion: s.optional(s.string()),
      collectionArn: s.optional(s.string()),
      creationTimestamp: s.optional(s.dateTime()),
      userCount: s.optional(s.int()),
      _keysMap: {
        faceCount: "FaceCount",
        faceModelVersion: "FaceModelVersion",
        collectionArn: "CollectionARN",
        creationTimestamp: "CreationTimestamp",
        userCount: "UserCount",
      },
    },
    { additionalProperties: s.json() },
  );
