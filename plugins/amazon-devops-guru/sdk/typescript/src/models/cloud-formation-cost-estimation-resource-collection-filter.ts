import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudFormationCostEstimationResourceCollectionFilter = {
  /** An array of CloudFormation stack names. Its size is fixed at 1 item. */
  stackNames?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudFormationCostEstimationResourceCollectionFilterSchema: Schema<CloudFormationCostEstimationResourceCollectionFilter> =
  s.object<CloudFormationCostEstimationResourceCollectionFilter>(
    {
      stackNames: s.optional(s.array(s.string())),
      _keysMap: {
        stackNames: "StackNames",
      },
    },
    { additionalProperties: s.json() },
  );
