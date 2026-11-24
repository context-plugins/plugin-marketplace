import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinkSubTaskParams = {
  /** The ID of the story to link as a sub-task of the parent story */
  storyId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkSubTaskParamsSchema: Schema<LinkSubTaskParams> = s.object<LinkSubTaskParams>(
  {
    storyId: s.int(),
    _keysMap: {
      storyId: "story_id",
    },
  },
  { additionalProperties: s.json() },
);
