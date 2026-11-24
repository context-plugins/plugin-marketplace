import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceTagSchema, type ResourceTag } from "./resource-tag.js";

export type TagResourceInput = {
  /** The Amazon Resource Name (ARN) for the Amazon SWF domain. */
  resourceArn: string;
  /**
   * The list of tags to add to a domain. Tags may only contain unicode letters, digits, whitespace,
   * or these symbols: _ . : / = + - \@.
   */
  tags: ResourceTag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagResourceInputSchema: Schema<TagResourceInput> = s.object<TagResourceInput>(
  {
    resourceArn: s.string(),
    tags: s.array(s.lazy(() => resourceTagSchema)),
  },
  { additionalProperties: s.json() },
);
