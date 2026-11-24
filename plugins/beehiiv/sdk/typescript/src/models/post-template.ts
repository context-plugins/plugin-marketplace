import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PostTemplate = {
  /** The prefixed ID of the post template. */
  id: string;
  /** The name of the post template. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postTemplateSchema: Schema<PostTemplate> = s.object<PostTemplate>(
  {
    id: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
