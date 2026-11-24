import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  state1DoiTServiceAccountsApiSchema,
  type State1DoiTServiceAccountsApi,
} from "./state1-doi-tservice-accounts-api.js";

/** The state to move an API token to. */
export type UpdateServiceAccountTokenRequest = {
  /**
   * `active` to enable the token, `disabled` to stop it authenticating. Any other value, `deleted`
   * and `expired` included, returns `400`. Re-enabling a token whose expiry has passed returns
   * `422`.
   */
  state: State1DoiTServiceAccountsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateServiceAccountTokenRequestSchema: Schema<UpdateServiceAccountTokenRequest> =
  s.object<UpdateServiceAccountTokenRequest>(
    {
      state: state1DoiTServiceAccountsApiSchema,
    },
    { additionalProperties: s.json() },
  );
