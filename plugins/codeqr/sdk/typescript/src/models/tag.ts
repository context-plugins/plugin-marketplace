import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorSchema, type Color } from "./color.js";

export type Tag = {
  /** The unique ID of the tag. */
  id: string;
  /** The name of the tag. */
  name: string;
  /** The color of the tag. */
  color: Color;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagSchema: Schema<Tag> = s.object<Tag>(
  {
    id: s.string(),
    name: s.string(),
    color: colorSchema,
  },
  { additionalProperties: s.json() },
);
