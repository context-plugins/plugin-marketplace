import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { imageSchema, type Image } from "./image.js";
import {
  protectiveEquipmentSummarizationAttributesSchema,
  type ProtectiveEquipmentSummarizationAttributes,
} from "./protective-equipment-summarization-attributes.js";

export type DetectProtectiveEquipmentRequest = {
  image: Image;
  summarizationAttributes?: ProtectiveEquipmentSummarizationAttributes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectProtectiveEquipmentRequestSchema: Schema<DetectProtectiveEquipmentRequest> =
  s.object<DetectProtectiveEquipmentRequest>(
    {
      image: imageSchema,
      summarizationAttributes: s.optional(s.lazy(() => protectiveEquipmentSummarizationAttributesSchema)),
      _keysMap: {
        image: "Image",
        summarizationAttributes: "SummarizationAttributes",
      },
    },
    { additionalProperties: s.json() },
  );
