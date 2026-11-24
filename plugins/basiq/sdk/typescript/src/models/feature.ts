import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { featureTypeSchema, type FeatureType } from "./feature-type.js";

export type Feature = {
  /** The type of feature described. */
  featureType: FeatureType;
  /**
   * Generic field containing additional information relevant to the featureType specified. Whether
   * mandatory or not is dependent on the value of the featureType.
   */
  additionalValue?: string;
  /**
   * Display text providing more information on the feature. Mandatory if the feature type is set to
   * OTHER.
   */
  additionalInfo?: string;
  /** Link to a web page with more information on this feature. */
  additionalInfoUri?: string;
  /**
   * true if the feature is already activated and false if the feature is available for activation.
   * Defaults to true if absent. > Note: this is an additional field appended to the feature object
   * defined in the Product Reference payload.
   */
  isActivated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureSchema: Schema<Feature> = s.object<Feature>(
  {
    featureType: featureTypeSchema,
    additionalValue: s.optional(s.string()),
    additionalInfo: s.optional(s.string()),
    additionalInfoUri: s.optional(s.string()),
    isActivated: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
