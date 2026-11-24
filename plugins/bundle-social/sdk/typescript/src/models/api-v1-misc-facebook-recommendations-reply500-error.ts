import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscFacebookRecommendationsReply500Error = {
  statusCode?: number | null;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscFacebookRecommendationsReply500ErrorSchema: Schema<ApiV1MiscFacebookRecommendationsReply500Error> =
  s.object<ApiV1MiscFacebookRecommendationsReply500Error>(
    {
      statusCode: s.optionalNullable(s.float64()),
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
