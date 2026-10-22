import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthTokenListItemSchema, type OAuthTokenListItem } from "./oauth-token-list-item.js";

/** Response body for `GET /oauth-clients/{appId}/tokens` (`listAppTokens`). */
export type OAuthAppTokensListResponse = {
  /** Active access and refresh tokens for the app */
  tokens: OAuthTokenListItem[];
};

export const oAuthAppTokensListResponseSchema: Schema<OAuthAppTokensListResponse> =
  s.object<OAuthAppTokensListResponse>({
    tokens: s.array(s.lazy(() => oAuthTokenListItemSchema)),
  });
