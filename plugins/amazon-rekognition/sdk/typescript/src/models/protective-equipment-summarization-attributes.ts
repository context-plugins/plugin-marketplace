import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requiredEquipmentTypeSchema, type RequiredEquipmentType } from "./required-equipment-type.js";

export type ProtectiveEquipmentSummarizationAttributes = {
  /**
   * The minimum confidence level for which you want summary information. The confidence level
   * applies to person detection, body part detection, equipment detection, and body part coverage.
   * Amazon Rekognition doesn't return summary information with a confidence than this specified
   * value. There isn't a default value. Specify a MinConfidence value that is between 50-100% as
   * DetectProtectiveEquipment returns predictions only where the detection confidence is between
   * 50% - 100%. If you specify a value that is less than 50%, the results are the same specifying a
   * value of 50%.
   */
  minConfidence: number;
  /**
   * An array of personal protective equipment types for which you want summary information. If a
   * person is detected wearing a required requipment type, the person's ID is added to the
   * PersonsWithRequiredEquipment array field returned in ProtectiveEquipmentSummary by
   * DetectProtectiveEquipment.
   */
  requiredEquipmentTypes: RequiredEquipmentType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const protectiveEquipmentSummarizationAttributesSchema: Schema<ProtectiveEquipmentSummarizationAttributes> =
  s.object<ProtectiveEquipmentSummarizationAttributes>(
    {
      minConfidence: s.float64(),
      requiredEquipmentTypes: s.array(s.lazy(() => requiredEquipmentTypeSchema)),
      _keysMap: {
        minConfidence: "MinConfidence",
        requiredEquipmentTypes: "RequiredEquipmentTypes",
      },
    },
    { additionalProperties: s.json() },
  );
