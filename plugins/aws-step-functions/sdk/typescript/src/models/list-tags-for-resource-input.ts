import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListTagsForResourceInput = {
  /** The Amazon Resource Name (ARN) for the Step Functions state machine or activity. */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceInputSchema: Schema<ListTagsForResourceInput> =
  s.object<ListTagsForResourceInput>(
    {
      resourceArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
