import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthClientsRevokeAllTokensResponse = {
  message?: string;
  /** Number of tokens revoked */
  count?: number;
};

export const oauthClientsRevokeAllTokensResponseSchema: Schema<OauthClientsRevokeAllTokensResponse> =
  s.object<OauthClientsRevokeAllTokensResponse>({
    message: s.optional(s.string()),
    count: s.optional(s.int()),
  });
