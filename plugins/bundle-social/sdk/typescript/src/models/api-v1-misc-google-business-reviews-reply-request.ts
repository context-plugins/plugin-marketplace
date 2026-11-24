import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessReviewsReplyRequest = {
  teamId: string;
  comment: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscGoogleBusinessReviewsReplyRequestProperties: s.Shape<ApiV1MiscGoogleBusinessReviewsReplyRequest> =
  {
    teamId: s.string(),
    comment: s.string(),
  };

export const apiV1MiscGoogleBusinessReviewsReplyRequestInternalSchema: Schema<ApiV1MiscGoogleBusinessReviewsReplyRequest> =
  s.object<ApiV1MiscGoogleBusinessReviewsReplyRequest>(apiV1MiscGoogleBusinessReviewsReplyRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscGoogleBusinessReviewsReplyRequestSchema: Schema<ApiV1MiscGoogleBusinessReviewsReplyRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessReviewsReplyRequest>(
      {
        ...apiV1MiscGoogleBusinessReviewsReplyRequestProperties,
        comment: s.string().check(s.minLength(1), s.maxLength(4096)),
      },
      { additionalProperties: s.json() },
    ),
  );
