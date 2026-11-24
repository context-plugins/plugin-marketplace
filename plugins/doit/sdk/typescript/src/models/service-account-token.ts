import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  stateDoiTServiceAccountsApiSchema,
  type StateDoiTServiceAccountsApi,
} from "./state-doi-tservice-accounts-api.js";

/**
 * An API token of a service account. It authenticates with the service account's permissions, and
 * carries no secret material after the create response.
 */
export type ServiceAccountToken = {
  /** API token ID. `null` only on a dry-run create. */
  id: string | null;
  /** ID of the service account that owns the token. */
  serviceAccountId: string;
  /** ID of the customer whose service account the token belongs to. */
  customerId: string;
  /** Name, unique among the service account's tokens. */
  name: string;
  /**
   * The token's stored state: `active` while it is enabled, `disabled` once it has been turned off.
   * This is not a liveness signal — a token whose `expiresTime` has passed stops authenticating but
   * keeps the state it was stored with, so `active` here does not by itself mean the token still
   * works; compare `expiresTime`. Only these two values can be set.
   */
  state: StateDoiTServiceAccountsApi;
  /** When the token was created. `null` only on a dry-run create. */
  createTime: Date | null;
  /** When the token stops authenticating. `null` when it does not expire. */
  expiresTime: Date | null;
  /** When the token last authenticated a request. `null` until it is first used. */
  lastUsedTime: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceAccountTokenSchema: Schema<ServiceAccountToken> = s.object<ServiceAccountToken>(
  {
    id: s.nullable(s.string()),
    serviceAccountId: s.string(),
    customerId: s.string(),
    name: s.string(),
    state: stateDoiTServiceAccountsApiSchema,
    createTime: s.nullable(s.dateTime()),
    expiresTime: s.nullable(s.dateTime()),
    lastUsedTime: s.nullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
