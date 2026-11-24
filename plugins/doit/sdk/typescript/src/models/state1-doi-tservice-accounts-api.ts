import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `active` to enable the token, `disabled` to stop it authenticating. Any other value, `deleted`
 * and `expired` included, returns `400`. Re-enabling a token whose expiry has passed returns `422`.
 */
export const State1DoiTServiceAccountsApi = {
  Active: "active",
  Disabled: "disabled",
} as const;
export type State1DoiTServiceAccountsApi =
  | (typeof State1DoiTServiceAccountsApi)[keyof typeof State1DoiTServiceAccountsApi]
  | (string & {});

export const state1DoiTServiceAccountsApiSchema: EnumSchema<State1DoiTServiceAccountsApi> =
  s.enumOf<State1DoiTServiceAccountsApi>(State1DoiTServiceAccountsApi);
