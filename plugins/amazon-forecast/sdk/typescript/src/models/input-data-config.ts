import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { supplementaryFeatureSchema, type SupplementaryFeature } from "./supplementary-feature.js";

export type InputDataConfig = {
  /** The Amazon Resource Name (ARN) of the dataset group. */
  datasetGroupArn: string;
  /** An array of supplementary features. The only supported feature is a holiday calendar. */
  supplementaryFeatures?: SupplementaryFeature[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputDataConfigSchema: Schema<InputDataConfig> = s.object<InputDataConfig>(
  {
    datasetGroupArn: s.string(),
    supplementaryFeatures: s.optional(s.array(s.lazy(() => supplementaryFeatureSchema))),
    _keysMap: {
      datasetGroupArn: "DatasetGroupArn",
      supplementaryFeatures: "SupplementaryFeatures",
    },
  },
  { additionalProperties: s.json() },
);
