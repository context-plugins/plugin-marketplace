import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resultBundleSocialPostApiSchema,
  type ResultBundleSocialPostApi,
} from "./result-bundle-social-post-api.js";

export type ApiV1PostReconnectSocialAccountResponse = {
  total: number;
  succeeded: number;
  failed: number;
  results: ResultBundleSocialPostApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostReconnectSocialAccountResponseSchema: Schema<ApiV1PostReconnectSocialAccountResponse> =
  s.object<ApiV1PostReconnectSocialAccountResponse>(
    {
      total: s.float64(),
      succeeded: s.float64(),
      failed: s.float64(),
      results: s.array(s.lazy(() => resultBundleSocialPostApiSchema)),
    },
    { additionalProperties: s.json() },
  );
