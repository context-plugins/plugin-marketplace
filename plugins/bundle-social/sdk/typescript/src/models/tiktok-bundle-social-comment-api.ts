import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TiktokBundleSocialCommentApi = {
  text?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tiktokBundleSocialCommentApiSchema: Schema<TiktokBundleSocialCommentApi> =
  s.object<TiktokBundleSocialCommentApi>(
    {
      text: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
