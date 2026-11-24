import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Topics most strongly associated with the story. */
export type TopicHolder = {
  /** Topic assigned to the article. */
  name?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topicHolderSchema: Schema<TopicHolder> = s.object<TopicHolder>(
  {
    name: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
