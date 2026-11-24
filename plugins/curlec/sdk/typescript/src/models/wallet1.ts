import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { providerSchema, type Provider } from "./provider.js";

/** Required when account_type=wallet (Amazon Pay only) */
export type Wallet1 = {
  provider?: Provider;
  /** 10-digit phone with country code (mandatory) */
  phone?: string;
  email?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const wallet1Properties: s.Shape<Wallet1> = {
  provider: s.optional(s.lazy(() => providerSchema)),
  phone: s.optional(s.string()),
  email: s.optional(s.string()),
  name: s.optional(s.string()),
};

export const wallet1InternalSchema: Schema<Wallet1> = s.object<Wallet1>(wallet1Properties, {
  additionalProperties: s.json(),
});

export const wallet1Schema: Schema<Wallet1> = s.lazySchema(() =>
  s.object<Wallet1>(
    {
      ...wallet1Properties,
      name: s.optional(s.string().check(s.minLength(4), s.maxLength(120))),
    },
    { additionalProperties: s.json() },
  ),
);
