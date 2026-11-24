import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudFormationCollection = {
  /** An array of CloudFormation stack names. */
  stackNames?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudFormationCollectionSchema: Schema<CloudFormationCollection> =
  s.object<CloudFormationCollection>(
    {
      stackNames: s.optional(s.array(s.string())),
      _keysMap: {
        stackNames: "StackNames",
      },
    },
    { additionalProperties: s.json() },
  );
