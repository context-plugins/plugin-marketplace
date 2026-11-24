import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { imageSchema, type Image } from "./image.js";
import {
  qualityFilterAmazonRekognitionUserApiSchema,
  type QualityFilterAmazonRekognitionUserApi,
} from "./quality-filter-amazon-rekognition-user-api.js";

export type SearchUsersByImageRequest = {
  /** The ID of an existing collection containing the UserID. */
  collectionId: string;
  image: Image;
  /** Specifies the minimum confidence in the UserID match to return. Default value is 80. */
  userMatchThreshold?: number;
  /** Maximum number of UserIDs to return. */
  maxUsers?: number;
  /**
   * A filter that specifies a quality bar for how much filtering is done to identify faces.
   * Filtered faces aren't searched for in the collection. The default value is NONE.
   */
  qualityFilter?: QualityFilterAmazonRekognitionUserApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchUsersByImageRequestSchema: Schema<SearchUsersByImageRequest> =
  s.object<SearchUsersByImageRequest>(
    {
      collectionId: s.string(),
      image: imageSchema,
      userMatchThreshold: s.optional(s.float64()),
      maxUsers: s.optional(s.int()),
      qualityFilter: s.optional(s.lazy(() => qualityFilterAmazonRekognitionUserApiSchema)),
      _keysMap: {
        collectionId: "CollectionId",
        image: "Image",
        userMatchThreshold: "UserMatchThreshold",
        maxUsers: "MaxUsers",
        qualityFilter: "QualityFilter",
      },
    },
    { additionalProperties: s.json() },
  );
