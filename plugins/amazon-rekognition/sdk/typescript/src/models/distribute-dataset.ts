import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DistributeDataset = {
  /** The Amazon Resource Name (ARN) of the dataset that you want to use. */
  arn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const distributeDatasetSchema: Schema<DistributeDataset> = s.object<DistributeDataset>(
  {
    arn: s.string(),
    _keysMap: {
      arn: "Arn",
    },
  },
  { additionalProperties: s.json() },
);
