import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialPostApiSchema,
  type ItemBundleSocialPostApi,
} from "./item-bundle-social-post-api.js";

export type ApiV1PostReconnectSocialAccountCandidatesResponse = {
  items: ItemBundleSocialPostApi[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostReconnectSocialAccountCandidatesResponseSchema: Schema<ApiV1PostReconnectSocialAccountCandidatesResponse> =
  s.object<ApiV1PostReconnectSocialAccountCandidatesResponse>(
    {
      items: s.array(s.lazy(() => itemBundleSocialPostApiSchema)),
      total: s.float64(),
    },
    { additionalProperties: s.json() },
  );
