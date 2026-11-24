import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type TagResourceInput = {
  /** The Amazon Resource Name (ARN) for the Step Functions state machine or activity. */
  resourceArn: string;
  /**
   * The list of tags to add to a resource. Tags may only contain Unicode letters, digits, white
   * space, or these symbols: _ . : / = + - \@.
   */
  tags: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagResourceInputSchema: Schema<TagResourceInput> = s.object<TagResourceInput>(
  {
    resourceArn: s.string(),
    tags: s.array(s.lazy(() => tagSchema)),
  },
  { additionalProperties: s.json() },
);
