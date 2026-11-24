import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscFacebookRecommendationsImportRequest = {
  teamId: string;
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscFacebookRecommendationsImportRequestProperties: s.Shape<ApiV1MiscFacebookRecommendationsImportRequest> =
  {
    teamId: s.string(),
    count: s.int(),
  };

export const apiV1MiscFacebookRecommendationsImportRequestInternalSchema: Schema<ApiV1MiscFacebookRecommendationsImportRequest> =
  s.object<ApiV1MiscFacebookRecommendationsImportRequest>(
    apiV1MiscFacebookRecommendationsImportRequestProperties,
    { additionalProperties: s.json() },
  );

export const apiV1MiscFacebookRecommendationsImportRequestSchema: Schema<ApiV1MiscFacebookRecommendationsImportRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscFacebookRecommendationsImportRequest>(
      {
        ...apiV1MiscFacebookRecommendationsImportRequestProperties,
        count: s.int().check(s.gte(1), s.lte(250)),
      },
      { additionalProperties: s.json() },
    ),
  );
