import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { providerSchema, type Provider } from "./provider.js";

/** Amazon Pay wallet details. Required when account_type=wallet. */
export type Wallet = {
  provider?: Provider;
  /** 10-digit phone with country code, e.g. +919876543210 */
  phone?: string;
  email?: string;
  /** Wallet holder name. Case-sensitive. Supported: a-z, A-Z, 0-9, space, ', -, _, /, (, ), . */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const walletProperties: s.Shape<Wallet> = {
  provider: s.optional(s.lazy(() => providerSchema)),
  phone: s.optional(s.string()),
  email: s.optional(s.string()),
  name: s.optional(s.string()),
};

export const walletInternalSchema: Schema<Wallet> = s.object<Wallet>(walletProperties, {
  additionalProperties: s.json(),
});

export const walletSchema: Schema<Wallet> = s.lazySchema(() =>
  s.object<Wallet>(
    {
      ...walletProperties,
      email: s.optional(s.string().check(s.email())),
      name: s.optional(s.string().check(s.minLength(4), s.maxLength(120))),
    },
    { additionalProperties: s.json() },
  ),
);
