import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModerationLabel = {
  /**
   * Specifies the confidence that Amazon Rekognition has that the label has been correctly
   * identified. If you don't specify the MinConfidence parameter in the call to
   * DetectModerationLabels, the operation returns labels with a confidence value greater than or
   * equal to 50 percent.
   */
  confidence?: number;
  /** The label name for the type of unsafe content detected in the image. */
  name?: string;
  /**
   * The name for the parent label. Labels at the top level of the hierarchy have the parent label
   * "".
   */
  parentName?: string;
  /** The level of the moderation label with regard to its taxonomy, from 1 to 3. */
  taxonomyLevel?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const moderationLabelSchema: Schema<ModerationLabel> = s.object<ModerationLabel>(
  {
    confidence: s.optional(s.float64()),
    name: s.optional(s.string()),
    parentName: s.optional(s.string()),
    taxonomyLevel: s.optional(s.int()),
    _keysMap: {
      confidence: "Confidence",
      name: "Name",
      parentName: "ParentName",
      taxonomyLevel: "TaxonomyLevel",
    },
  },
  { additionalProperties: s.json() },
);
