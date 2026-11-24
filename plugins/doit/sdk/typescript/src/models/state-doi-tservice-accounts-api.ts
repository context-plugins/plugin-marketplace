import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The token's stored state: `active` while it is enabled, `disabled` once it has been turned off.
 * This is not a liveness signal — a token whose `expiresTime` has passed stops authenticating but
 * keeps the state it was stored with, so `active` here does not by itself mean the token still
 * works; compare `expiresTime`. Only these two values can be set.
 */
export const StateDoiTServiceAccountsApi = {
  Active: "active",
  Disabled: "disabled",
} as const;
export type StateDoiTServiceAccountsApi =
  | (typeof StateDoiTServiceAccountsApi)[keyof typeof StateDoiTServiceAccountsApi]
  | (string & {});

export const stateDoiTServiceAccountsApiSchema: EnumSchema<StateDoiTServiceAccountsApi> =
  s.enumOf<StateDoiTServiceAccountsApi>(StateDoiTServiceAccountsApi);
