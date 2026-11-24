import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ReviewsReplyRequest = {
  /**
   * Reply text, trimmed. 1 to 10,000 characters; the platform's own limit also applies (Google
   * Business Profile 4,096 bytes, App Store 5,970 characters, Google Play 350, eBay 80).
   */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ReviewsReplyRequestProperties: s.Shape<V1ReviewsReplyRequest> = {
  text: s.string(),
};

export const v1ReviewsReplyRequestInternalSchema: Schema<V1ReviewsReplyRequest> =
  s.object<V1ReviewsReplyRequest>(v1ReviewsReplyRequestProperties, { additionalProperties: s.json() });

export const v1ReviewsReplyRequestSchema: Schema<V1ReviewsReplyRequest> = s.lazySchema(() =>
  s.object<V1ReviewsReplyRequest>(
    {
      ...v1ReviewsReplyRequestProperties,
      text: s.string().check(s.minLength(1), s.maxLength(10000)),
    },
    { additionalProperties: s.json() },
  ),
);
