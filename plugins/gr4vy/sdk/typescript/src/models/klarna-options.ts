import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authorizationTokenSchema, type AuthorizationToken } from "./unions/authorization-token.js";
import { subscription1Schema, type Subscription1 } from "./unions/subscription1.js";
import { tokenOnlyModeSchema, type TokenOnlyMode } from "./unions/token-only-mode.js";

export type KlarnaOptions = {
  /** Provides subscription information to Klarna. */
  subscription?: Subscription1;
  /**
   * When set to `true`, this will authorize the transaction with Klarna for the purposes of
   * tokenizing the payment method with the transaction details. No funds will be captured and the
   * authorization will be automatically voided. This is useful for up-sell scenarios where you want
   * to tokenize a Klarna payment method for future use.
   */
  tokenOnlyMode?: TokenOnlyMode;
  /**
   * An authorization token returned by the Klarna Express Checkout JS SDK after the buyer completes
   * payment in the embedded widget. When provided, the connector skips the HPP redirect and places
   * the Klarna order directly using this token.
   */
  authorizationToken?: AuthorizationToken;
};

export const klarnaOptionsSchema: Schema<KlarnaOptions> = s.object<KlarnaOptions>({
  subscription: s.optional(s.lazy(() => subscription1Schema)),
  tokenOnlyMode: s.optional(s.lazy(() => tokenOnlyModeSchema)),
  authorizationToken: s.optional(s.lazy(() => authorizationTokenSchema)),
  _keysMap: {
    tokenOnlyMode: "token_only_mode",
    authorizationToken: "authorization_token",
  },
});
