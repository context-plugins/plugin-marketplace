import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyMaterialInternalSchema, storyMaterialSchema, type StoryMaterial } from "./story-material.js";

export type StoryMaterials = {
  storyId: string;
  results: StoryMaterial[];
  /** Opaque cursor for the next (newer) page; `null` at the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storyMaterialsProperties: s.Shape<StoryMaterials> = {
  storyId: s.string(),
  results: s.array(s.lazy(() => storyMaterialInternalSchema)),
  nextCursor: s.nullable(s.string()),
  _keysMap: {
    storyId: "story_id",
    nextCursor: "next_cursor",
  },
};

export const storyMaterialsInternalSchema: Schema<StoryMaterials> = s.object<StoryMaterials>(
  storyMaterialsProperties,
  { additionalProperties: s.json() },
);

export const storyMaterialsSchema: Schema<StoryMaterials> = s.lazySchema(() =>
  s.object<StoryMaterials>(
    {
      ...storyMaterialsProperties,
      results: s.array(s.lazy(() => storyMaterialSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
