import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { emailSchema, type Email } from "./unions/email.js";
import { name11Schema, type Name11 } from "./unions/name11.js";
import { token1Schema, type Token1 } from "./unions/token1.js";
import { usernameSchema, type Username } from "./unions/username.js";
import { verifySchema, type Verify } from "./unions/verify.js";

export type DlocalWalletOptions = {
  /** Passes `wallet.name` to the dLocal API for those connectors that need it. */
  name?: Name11;
  /** Passes `wallet.email` to the dLocal API for those connectors that need it. */
  email?: Email;
  /** Passes `wallet.token` to the dLocal API for those connectors that need it. */
  token?: Token1;
  /** Passes `wallet.username` to the dLocal API for those connectors that need it. */
  username?: Username;
  /** Passes `wallet.verify` to the dLocal API for those connectors that need it. */
  verify?: Verify;
};

export const dlocalWalletOptionsSchema: Schema<DlocalWalletOptions> = s.object<DlocalWalletOptions>({
  name: s.optional(s.lazy(() => name11Schema)),
  email: s.optional(s.lazy(() => emailSchema)),
  token: s.optional(s.lazy(() => token1Schema)),
  username: s.optional(s.lazy(() => usernameSchema)),
  verify: s.optional(s.lazy(() => verifySchema)),
});
