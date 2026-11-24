import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { topicDtoSchema, type TopicDto } from "./topic-dto.js";

/** Topic search result */
export type TopicSearchResult = {
  total: number;
  data: TopicDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topicSearchResultSchema: Schema<TopicSearchResult> = s.object<TopicSearchResult>(
  {
    total: s.int(),
    data: s.array(s.lazy(() => topicDtoSchema)),
  },
  { additionalProperties: s.json() },
);
