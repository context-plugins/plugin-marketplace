import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * One field of a 1Password item, resolved only when the agent asks for it.
 *
 * Nothing here is a secret: the quadruple NAMES a credential without carrying it. Creating the
 * binding makes no call to 1Password — a provider outage must not stop a run from being dispatched,
 * and no vault is ever enumerated.
 *
 * A one-time-password field resolves to its current code; its seed is never read, so there is no
 * flag to ask for one.
 */
export type OnePasswordSecretSource = {
  /** @default "onepassword" */
  type?: "onepassword";
  /** 1Password integration to resolve through. Must belong to this project. */
  integrationId: string;
  vaultId: string;
  itemId: string;
  /** Field id from the item-fields endpoint, e.g. "password". */
  fieldId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const onePasswordSecretSourceProperties: s.Shape<OnePasswordSecretSource> = {
  type: s.defaulted(s.literal("onepassword"), "onepassword"),
  integrationId: s.string(),
  vaultId: s.string(),
  itemId: s.string(),
  fieldId: s.string(),
};

export const onePasswordSecretSourceInternalSchema: Schema<OnePasswordSecretSource> =
  s.object<OnePasswordSecretSource>(onePasswordSecretSourceProperties, { additionalProperties: s.json() });

export const onePasswordSecretSourceSchema: Schema<OnePasswordSecretSource> = s.lazySchema(() =>
  s.object<OnePasswordSecretSource>(
    {
      ...onePasswordSecretSourceProperties,
      vaultId: s.string().check(s.minLength(1), s.maxLength(64)),
      itemId: s.string().check(s.minLength(1), s.maxLength(64)),
      fieldId: s.string().check(s.minLength(1), s.maxLength(64)),
    },
    { additionalProperties: s.json() },
  ),
);
