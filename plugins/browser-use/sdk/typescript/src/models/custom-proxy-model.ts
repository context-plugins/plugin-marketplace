import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { passwordInternalSchema, passwordSchema, type Password } from "./unions/password.js";
import { usernameInternalSchema, usernameSchema, type Username } from "./unions/username.js";

/** Request model for creating a custom proxy. */
export type CustomProxyModel = {
  /** Host of the proxy. */
  host: string;
  /** Port of the proxy. */
  port: number;
  /** Username for proxy authentication. */
  username?: Username;
  /** Password for proxy authentication. */
  password?: Password;
  /**
   * Ignore TLS certificate errors. Enable this if your proxy uses a self-signed or untrusted
   * certificate (e.g. Burp Suite, corporate proxies).
   *
   * @default false
   */
  ignoreCertErrors?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customProxyModelProperties: s.Shape<CustomProxyModel> = {
  host: s.string(),
  port: s.int(),
  username: s.optional(s.lazy(() => usernameInternalSchema)),
  password: s.optional(s.lazy(() => passwordInternalSchema)),
  ignoreCertErrors: s.defaulted(s.boolean(), false),
};

export const customProxyModelInternalSchema: Schema<CustomProxyModel> = s.object<CustomProxyModel>(
  customProxyModelProperties,
  { additionalProperties: s.json() },
);

export const customProxyModelSchema: Schema<CustomProxyModel> = s.lazySchema(() =>
  s.object<CustomProxyModel>(
    {
      ...customProxyModelProperties,
      host: s.string().check(s.minLength(1), s.maxLength(255)),
      port: s.int().check(s.gte(1), s.lte(65535)),
      username: s.optional(s.lazy(() => usernameSchema)),
      password: s.optional(s.lazy(() => passwordSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
