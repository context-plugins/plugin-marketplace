import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { imageSchema, type Image } from "./image.js";
import { qualityFilterSchema, type QualityFilter } from "./quality-filter.js";

export type SearchFacesByImageRequest = {
  /** ID of the collection to search. */
  collectionId: string;
  image: Image;
  /**
   * Maximum number of faces to return. The operation returns the maximum number of faces with the
   * highest confidence in the match.
   */
  maxFaces?: number;
  /**
   * (Optional) Specifies the minimum confidence in the face match to return. For example, don't
   * return any matches where confidence in matches is less than 70%. The default value is 80%.
   */
  faceMatchThreshold?: number;
  /**
   * A filter that specifies a quality bar for how much filtering is done to identify faces.
   * Filtered faces aren't searched for in the collection. If you specify AUTO, Amazon Rekognition
   * chooses the quality bar. If you specify LOW, MEDIUM, or HIGH, filtering removes all faces that
   * don’t meet the chosen quality bar. The quality bar is based on a variety of common use cases.
   * Low-quality detections can occur for a number of reasons. Some examples are an object that's
   * misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to
   * use. If you specify NONE, no filtering is
   */
  qualityFilter?: QualityFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchFacesByImageRequestSchema: Schema<SearchFacesByImageRequest> =
  s.object<SearchFacesByImageRequest>(
    {
      collectionId: s.string(),
      image: imageSchema,
      maxFaces: s.optional(s.int()),
      faceMatchThreshold: s.optional(s.float64()),
      qualityFilter: s.optional(s.lazy(() => qualityFilterSchema)),
      _keysMap: {
        collectionId: "CollectionId",
        image: "Image",
        maxFaces: "MaxFaces",
        faceMatchThreshold: "FaceMatchThreshold",
        qualityFilter: "QualityFilter",
      },
    },
    { additionalProperties: s.json() },
  );
