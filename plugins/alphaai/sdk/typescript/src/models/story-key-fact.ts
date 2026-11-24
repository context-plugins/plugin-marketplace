import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StoryKeyFact = {
  /** The fact as the summary states it; every figure in it appears in the source article. */
  text: string;
  /**
   * The `uid` of the article the fact was read from — a row of
   * `/api/stories/{story_id}/materials/`, openable with `/api/news/{uid}/`. Empty when that article
   * has since been removed.
   */
  sourceUid: string;
  /** The source domain of that article. */
  publisher: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storyKeyFactSchema: Schema<StoryKeyFact> = s.object<StoryKeyFact>(
  {
    text: s.string(),
    sourceUid: s.string(),
    publisher: s.string(),
    _keysMap: {
      sourceUid: "source_uid",
    },
  },
  { additionalProperties: s.json() },
);
