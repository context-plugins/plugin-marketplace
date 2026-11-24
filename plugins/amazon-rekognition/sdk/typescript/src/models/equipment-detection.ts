import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import { coversBodyPartSchema, type CoversBodyPart } from "./covers-body-part.js";
import { type3Schema, type Type3 } from "./type3.js";

export type EquipmentDetection = {
  boundingBox?: BoundingBox;
  /**
   * The confidence that Amazon Rekognition has that the bounding box (BoundingBox) contains an item
   * of PPE.
   */
  confidence?: number;
  /** The type of detected PPE. */
  type?: Type3;
  coversBodyPart?: CoversBodyPart;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const equipmentDetectionSchema: Schema<EquipmentDetection> = s.object<EquipmentDetection>(
  {
    boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
    confidence: s.optional(s.float64()),
    type: s.optional(s.lazy(() => type3Schema)),
    coversBodyPart: s.optional(s.lazy(() => coversBodyPartSchema)),
    _keysMap: {
      boundingBox: "BoundingBox",
      confidence: "Confidence",
      type: "Type",
      coversBodyPart: "CoversBodyPart",
    },
  },
  { additionalProperties: s.json() },
);
