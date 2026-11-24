import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinkedinBundleSocialCommentApi = {
  text?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkedinBundleSocialCommentApiSchema: Schema<LinkedinBundleSocialCommentApi> =
  s.object<LinkedinBundleSocialCommentApi>(
    {
      text: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
