import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessReviewsImportRequest = {
  teamId: string;
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscGoogleBusinessReviewsImportRequestProperties: s.Shape<ApiV1MiscGoogleBusinessReviewsImportRequest> =
  {
    teamId: s.string(),
    count: s.int(),
  };

export const apiV1MiscGoogleBusinessReviewsImportRequestInternalSchema: Schema<ApiV1MiscGoogleBusinessReviewsImportRequest> =
  s.object<ApiV1MiscGoogleBusinessReviewsImportRequest>(
    apiV1MiscGoogleBusinessReviewsImportRequestProperties,
    { additionalProperties: s.json() },
  );

export const apiV1MiscGoogleBusinessReviewsImportRequestSchema: Schema<ApiV1MiscGoogleBusinessReviewsImportRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessReviewsImportRequest>(
      {
        ...apiV1MiscGoogleBusinessReviewsImportRequestProperties,
        count: s.int().check(s.gte(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
