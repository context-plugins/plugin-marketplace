import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { featurizationMethodSchema, type FeaturizationMethod } from "./featurization-method.js";

export type Featurization = {
  /**
   * The name of the schema attribute that specifies the data field to be featurized. Amazon
   * Forecast supports the target field of the TARGET_TIME_SERIES and the RELATED_TIME_SERIES
   * datasets. For example, for the RETAIL domain, the target is demand, and for the CUSTOM domain,
   * the target is target_value. For more information, see howitworks-missing-values.
   */
  attributeName: string;
  /**
   * An array of one FeaturizationMethod object that specifies the feature transformation method.
   */
  featurizationPipeline?: FeaturizationMethod[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featurizationSchema: Schema<Featurization> = s.object<Featurization>(
  {
    attributeName: s.string(),
    featurizationPipeline: s.optional(s.array(s.lazy(() => featurizationMethodSchema))),
    _keysMap: {
      attributeName: "AttributeName",
      featurizationPipeline: "FeaturizationPipeline",
    },
  },
  { additionalProperties: s.json() },
);
