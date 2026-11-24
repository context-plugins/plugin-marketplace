import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscLinkedinMentionsBuilderResponse = {
  commentary: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscLinkedinMentionsBuilderResponseSchema: Schema<ApiV1MiscLinkedinMentionsBuilderResponse> =
  s.object<ApiV1MiscLinkedinMentionsBuilderResponse>(
    {
      commentary: s.string(),
    },
    { additionalProperties: s.json() },
  );
