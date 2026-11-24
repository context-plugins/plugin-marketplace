import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ApiV1MiscLinkedinMentionsBuilderRequest = {
  text?: string;
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscLinkedinMentionsBuilderRequestSchema: Schema<ApiV1MiscLinkedinMentionsBuilderRequest> =
  s.object<ApiV1MiscLinkedinMentionsBuilderRequest>(
    {
      text: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
    },
    { additionalProperties: s.json() },
  );
