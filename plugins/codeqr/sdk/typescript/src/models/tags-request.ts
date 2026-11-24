import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { color1Schema, type Color1 } from "./color1.js";

export type TagsRequest = {
  /** The name of the tag to create. */
  name?: string | null;
  /** The name of the tag to create. */
  tag?: string | null;
  /**
   * The color of the tag. If not provided, a random color will be used from the list: red, yellow,
   * green, blue, purple, pink, brown.
   */
  color?: Color1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagsRequestSchema: Schema<TagsRequest> = s.object<TagsRequest>(
  {
    name: s.optionalNullable(s.string()),
    tag: s.optionalNullable(s.string()),
    color: s.optional(s.lazy(() => color1Schema)),
  },
  { additionalProperties: s.json() },
);
