import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UntagResourceInput = {
  /** The Amazon Resource Name (ARN) for the Step Functions state machine or activity. */
  resourceArn: string;
  /** The list of tags to remove from the resource. */
  tagKeys: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const untagResourceInputSchema: Schema<UntagResourceInput> = s.object<UntagResourceInput>(
  {
    resourceArn: s.string(),
    tagKeys: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
