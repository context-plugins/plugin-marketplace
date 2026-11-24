import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { geometrySchema, type Geometry } from "./geometry.js";
import { type4Schema, type Type4 } from "./type4.js";

export type TextDetection = {
  /** The word or line of text recognized by Amazon Rekognition. */
  detectedText?: string;
  /** The type of text that was detected. */
  type?: Type4;
  /**
   * The identifier for the detected text. The identifier is only unique for a single call to
   * DetectText.
   */
  id?: number;
  /**
   * The Parent identifier for the detected text identified by the value of ID. If the type of
   * detected text is LINE, the value of ParentId is Null.
   */
  parentId?: number;
  /**
   * The confidence that Amazon Rekognition has in the accuracy of the detected text and the
   * accuracy of the geometry points around the detected text.
   */
  confidence?: number;
  geometry?: Geometry;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textDetectionSchema: Schema<TextDetection> = s.object<TextDetection>(
  {
    detectedText: s.optional(s.string()),
    type: s.optional(s.lazy(() => type4Schema)),
    id: s.optional(s.int()),
    parentId: s.optional(s.int()),
    confidence: s.optional(s.float64()),
    geometry: s.optional(s.lazy(() => geometrySchema)),
    _keysMap: {
      detectedText: "DetectedText",
      type: "Type",
      id: "Id",
      parentId: "ParentId",
      confidence: "Confidence",
      geometry: "Geometry",
    },
  },
  { additionalProperties: s.json() },
);
