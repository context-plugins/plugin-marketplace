import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { equipmentDetectionSchema, type EquipmentDetection } from "./equipment-detection.js";
import { nameSchema, type Name } from "./name.js";

export type ProtectiveEquipmentBodyPart = {
  /** The detected body part. */
  name?: Name;
  /**
   * The confidence that Amazon Rekognition has in the detection accuracy of the detected body part.
   */
  confidence?: number;
  /** An array of Personal Protective Equipment items detected around a body part. */
  equipmentDetections?: EquipmentDetection[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const protectiveEquipmentBodyPartSchema: Schema<ProtectiveEquipmentBodyPart> =
  s.object<ProtectiveEquipmentBodyPart>(
    {
      name: s.optional(s.lazy(() => nameSchema)),
      confidence: s.optional(s.float64()),
      equipmentDetections: s.optional(s.array(s.lazy(() => equipmentDetectionSchema))),
      _keysMap: {
        name: "Name",
        confidence: "Confidence",
        equipmentDetections: "EquipmentDetections",
      },
    },
    { additionalProperties: s.json() },
  );
