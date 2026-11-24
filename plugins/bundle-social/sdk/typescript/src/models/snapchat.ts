import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyDurationSchema, type StoryDuration } from "./story-duration.js";
import { Type5, type5Schema } from "./type5.js";

export type Snapchat = {
  /** @default Type5.Story */
  type?: Type5;
  uploadIds?: string[] | null;
  text?: string | null;
  title?: string | null;
  description?: string | null;
  locale?: string | null;
  /** @default false */
  skipSaveToProfile?: boolean | null;
  storyDuration?: StoryDuration | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const snapchatSchema: Schema<Snapchat> = s.object<Snapchat>(
  {
    type: s.defaulted(type5Schema, Type5.Story),
    uploadIds: s.optionalNullable(s.array(s.string())),
    text: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    locale: s.optionalNullable(s.string()),
    skipSaveToProfile: s.defaulted(s.nullable(s.boolean()), false),
    storyDuration: s.optionalNullable(s.lazy(() => storyDurationSchema)),
  },
  { additionalProperties: s.json() },
);
