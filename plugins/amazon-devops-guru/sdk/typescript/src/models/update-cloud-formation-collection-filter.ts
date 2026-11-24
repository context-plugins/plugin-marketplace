import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateCloudFormationCollectionFilter = {
  /**
   * An array of the names of the Amazon Web Services CloudFormation stacks to update. You can
   * specify up to 500 Amazon Web Services CloudFormation stacks.
   */
  stackNames?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCloudFormationCollectionFilterSchema: Schema<UpdateCloudFormationCollectionFilter> =
  s.object<UpdateCloudFormationCollectionFilter>(
    {
      stackNames: s.optional(s.array(s.string())),
      _keysMap: {
        stackNames: "StackNames",
      },
    },
    { additionalProperties: s.json() },
  );
