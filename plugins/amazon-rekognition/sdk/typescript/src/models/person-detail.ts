import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import { faceDetailSchema, type FaceDetail } from "./face-detail.js";

export type PersonDetail = {
  /**
   * Identifier for the person detected person within a video. Use to keep track of the person
   * throughout the video. The identifier is not stored by Amazon Rekognition.
   */
  index?: number;
  boundingBox?: BoundingBox;
  face?: FaceDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personDetailSchema: Schema<PersonDetail> = s.object<PersonDetail>(
  {
    index: s.optional(s.int()),
    boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
    face: s.optional(s.lazy(() => faceDetailSchema)),
    _keysMap: {
      index: "Index",
      boundingBox: "BoundingBox",
      face: "Face",
    },
  },
  { additionalProperties: s.json() },
);
