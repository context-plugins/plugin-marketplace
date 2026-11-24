import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { topicLabelsSchema, type TopicLabels } from "./topic-labels.js";

export type TopicDto = {
  id?: number | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  name?: string | null;
  labels?: TopicLabels;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topicDtoSchema: Schema<TopicDto> = s.object<TopicDto>(
  {
    id: s.optionalNullable(s.int()),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
    name: s.optionalNullable(s.string()),
    labels: s.optional(s.lazy(() => topicLabelsSchema)),
  },
  { additionalProperties: s.json() },
);
