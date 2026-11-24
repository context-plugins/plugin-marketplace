import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detectLabelsSettingsSchema, type DetectLabelsSettings } from "./detect-labels-settings.js";
import { featureSchema, type Feature } from "./feature.js";
import { imageSchema, type Image } from "./image.js";

export type DetectLabelsRequest = {
  image: Image;
  /**
   * Maximum number of labels you want the service to return in the response. The service returns
   * the specified number of highest confidence labels. Only valid when GENERAL_LABELS is specified
   * as a feature type in the Feature input parameter.
   */
  maxLabels?: number;
  /**
   * Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't
   * return any labels with confidence lower than this specified value. If MinConfidence is not
   * specified, the operation returns labels with a confidence values greater than or equal to 55
   * percent. Only valid when GENERAL_LABELS is specified as a feature type in the Feature input
   * parameter.
   */
  minConfidence?: number;
  /**
   * A list of the types of analysis to perform. Specifying GENERAL_LABELS uses the label detection
   * feature, while specifying IMAGE_PROPERTIES returns information regarding image color and
   * quality. If no option is specified GENERAL_LABELS is used by default.
   */
  features?: Feature[];
  settings?: DetectLabelsSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectLabelsRequestSchema: Schema<DetectLabelsRequest> = s.object<DetectLabelsRequest>(
  {
    image: imageSchema,
    maxLabels: s.optional(s.int()),
    minConfidence: s.optional(s.float64()),
    features: s.optional(s.array(s.lazy(() => featureSchema))),
    settings: s.optional(s.lazy(() => detectLabelsSettingsSchema)),
    _keysMap: {
      image: "Image",
      maxLabels: "MaxLabels",
      minConfidence: "MinConfidence",
      features: "Features",
      settings: "Settings",
    },
  },
  { additionalProperties: s.json() },
);
