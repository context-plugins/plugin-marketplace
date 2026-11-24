import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import {
  protectiveEquipmentBodyPartSchema,
  type ProtectiveEquipmentBodyPart,
} from "./protective-equipment-body-part.js";

export type ProtectiveEquipmentPerson = {
  /** An array of body parts detected on a person's body (including body parts without PPE). */
  bodyParts?: ProtectiveEquipmentBodyPart[];
  boundingBox?: BoundingBox;
  /** The confidence that Amazon Rekognition has that the bounding box contains a person. */
  confidence?: number;
  /**
   * The identifier for the detected person. The identifier is only unique for a single call to
   * DetectProtectiveEquipment.
   */
  id?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const protectiveEquipmentPersonSchema: Schema<ProtectiveEquipmentPerson> =
  s.object<ProtectiveEquipmentPerson>(
    {
      bodyParts: s.optional(s.array(s.lazy(() => protectiveEquipmentBodyPartSchema))),
      boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
      confidence: s.optional(s.float64()),
      id: s.optional(s.int()),
      _keysMap: {
        bodyParts: "BodyParts",
        boundingBox: "BoundingBox",
        confidence: "Confidence",
        id: "Id",
      },
    },
    { additionalProperties: s.json() },
  );
