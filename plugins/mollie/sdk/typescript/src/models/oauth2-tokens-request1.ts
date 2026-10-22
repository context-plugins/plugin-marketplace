import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oauthTokenTypeHint1Schema, type OauthTokenTypeHint1 } from "./oauth-token-type-hint1.js";

export type Oauth2TokensRequest1 = {
  /** The type of token you want to revoke. */
  tokenTypeHint: OauthTokenTypeHint1;
  /** The token you want to revoke. */
  token: string;
};

export const oauth2TokensRequest1Schema: Schema<Oauth2TokensRequest1> = s.object<Oauth2TokensRequest1>({
  tokenTypeHint: oauthTokenTypeHint1Schema,
  token: s.string(),
  _keysMap: {
    tokenTypeHint: "token_type_hint",
  },
});
