import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ageRangeSchema, type AgeRange } from "./age-range.js";
import { beardSchema, type Beard } from "./beard.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import { emotionSchema, type Emotion } from "./emotion.js";
import { eyeDirectionSchema, type EyeDirection } from "./eye-direction.js";
import { eyeOpenSchema, type EyeOpen } from "./eye-open.js";
import { eyeglassesSchema, type Eyeglasses } from "./eyeglasses.js";
import { faceOccludedSchema, type FaceOccluded } from "./face-occluded.js";
import { genderSchema, type Gender } from "./gender.js";
import { imageQualitySchema, type ImageQuality } from "./image-quality.js";
import { landmarkSchema, type Landmark } from "./landmark.js";
import { mouthOpenSchema, type MouthOpen } from "./mouth-open.js";
import { mustacheSchema, type Mustache } from "./mustache.js";
import { poseSchema, type Pose } from "./pose.js";
import { smileSchema, type Smile } from "./smile.js";
import { sunglassesSchema, type Sunglasses } from "./sunglasses.js";

export type FaceDetail = {
  boundingBox?: BoundingBox;
  ageRange?: AgeRange;
  smile?: Smile;
  eyeglasses?: Eyeglasses;
  sunglasses?: Sunglasses;
  gender?: Gender;
  beard?: Beard;
  mustache?: Mustache;
  eyesOpen?: EyeOpen;
  mouthOpen?: MouthOpen;
  /**
   * The emotions that appear to be expressed on the face, and the confidence level in the
   * determination. The API is only making a determination of the physical appearance of a person's
   * face. It is not a determination of the person’s internal emotional state and should not be used
   * in such a way. For example, a person pretending to have a sad face might not be sad
   * emotionally.
   */
  emotions?: Emotion[];
  /** Indicates the location of landmarks on the face. Default attribute. */
  landmarks?: Landmark[];
  pose?: Pose;
  quality?: ImageQuality;
  /**
   * Confidence level that the bounding box contains a face (and not a different object such as a
   * tree). Default attribute.
   */
  confidence?: number;
  faceOccluded?: FaceOccluded;
  eyeDirection?: EyeDirection;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const faceDetailSchema: Schema<FaceDetail> = s.object<FaceDetail>(
  {
    boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
    ageRange: s.optional(s.lazy(() => ageRangeSchema)),
    smile: s.optional(s.lazy(() => smileSchema)),
    eyeglasses: s.optional(s.lazy(() => eyeglassesSchema)),
    sunglasses: s.optional(s.lazy(() => sunglassesSchema)),
    gender: s.optional(s.lazy(() => genderSchema)),
    beard: s.optional(s.lazy(() => beardSchema)),
    mustache: s.optional(s.lazy(() => mustacheSchema)),
    eyesOpen: s.optional(s.lazy(() => eyeOpenSchema)),
    mouthOpen: s.optional(s.lazy(() => mouthOpenSchema)),
    emotions: s.optional(s.array(s.lazy(() => emotionSchema))),
    landmarks: s.optional(s.array(s.lazy(() => landmarkSchema))),
    pose: s.optional(s.lazy(() => poseSchema)),
    quality: s.optional(s.lazy(() => imageQualitySchema)),
    confidence: s.optional(s.float64()),
    faceOccluded: s.optional(s.lazy(() => faceOccludedSchema)),
    eyeDirection: s.optional(s.lazy(() => eyeDirectionSchema)),
    _keysMap: {
      boundingBox: "BoundingBox",
      ageRange: "AgeRange",
      smile: "Smile",
      eyeglasses: "Eyeglasses",
      sunglasses: "Sunglasses",
      gender: "Gender",
      beard: "Beard",
      mustache: "Mustache",
      eyesOpen: "EyesOpen",
      mouthOpen: "MouthOpen",
      emotions: "Emotions",
      landmarks: "Landmarks",
      pose: "Pose",
      quality: "Quality",
      confidence: "Confidence",
      faceOccluded: "FaceOccluded",
      eyeDirection: "EyeDirection",
    },
  },
  { additionalProperties: s.json() },
);
