import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  protectiveEquipmentPersonSchema,
  type ProtectiveEquipmentPerson,
} from "./protective-equipment-person.js";
import {
  protectiveEquipmentSummarySchema,
  type ProtectiveEquipmentSummary,
} from "./protective-equipment-summary.js";

export type DetectProtectiveEquipmentResponse = {
  /** The version number of the PPE detection model used to detect PPE in the image. */
  protectiveEquipmentModelVersion?: string;
  /** An array of persons detected in the image (including persons not wearing PPE). */
  persons?: ProtectiveEquipmentPerson[];
  summary?: ProtectiveEquipmentSummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectProtectiveEquipmentResponseSchema: Schema<DetectProtectiveEquipmentResponse> =
  s.object<DetectProtectiveEquipmentResponse>(
    {
      protectiveEquipmentModelVersion: s.optional(s.string()),
      persons: s.optional(s.array(s.lazy(() => protectiveEquipmentPersonSchema))),
      summary: s.optional(s.lazy(() => protectiveEquipmentSummarySchema)),
      _keysMap: {
        protectiveEquipmentModelVersion: "ProtectiveEquipmentModelVersion",
        persons: "Persons",
        summary: "Summary",
      },
    },
    { additionalProperties: s.json() },
  );
