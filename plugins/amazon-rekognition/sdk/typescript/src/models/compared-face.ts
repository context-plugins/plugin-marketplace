import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import { emotionSchema, type Emotion } from "./emotion.js";
import { imageQualitySchema, type ImageQuality } from "./image-quality.js";
import { landmarkSchema, type Landmark } from "./landmark.js";
import { poseSchema, type Pose } from "./pose.js";
import { smileSchema, type Smile } from "./smile.js";

export type ComparedFace = {
  boundingBox?: BoundingBox;
  /** Level of confidence that what the bounding box contains is a face. */
  confidence?: number;
  /** An array of facial landmarks. */
  landmarks?: Landmark[];
  pose?: Pose;
  quality?: ImageQuality;
  /**
   * The emotions that appear to be expressed on the face, and the confidence level in the
   * determination. Valid values include "Happy", "Sad", "Angry", "Confused", "Disgusted",
   * "Surprised", "Calm", "Unknown", and "Fear".
   */
  emotions?: Emotion[];
  smile?: Smile;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const comparedFaceSchema: Schema<ComparedFace> = s.object<ComparedFace>(
  {
    boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
    confidence: s.optional(s.float64()),
    landmarks: s.optional(s.array(s.lazy(() => landmarkSchema))),
    pose: s.optional(s.lazy(() => poseSchema)),
    quality: s.optional(s.lazy(() => imageQualitySchema)),
    emotions: s.optional(s.array(s.lazy(() => emotionSchema))),
    smile: s.optional(s.lazy(() => smileSchema)),
    _keysMap: {
      boundingBox: "BoundingBox",
      confidence: "Confidence",
      landmarks: "Landmarks",
      pose: "Pose",
      quality: "Quality",
      emotions: "Emotions",
      smile: "Smile",
    },
  },
  { additionalProperties: s.json() },
);
