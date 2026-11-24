import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountInternalSchema, accountSchema, type Account } from "./account.js";

export type AccountEnvelope = {
  /** Authenticated account snapshot (§F1): plan, key env, credit balance and rate limit. */
  data: Account;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountEnvelopeProperties: s.Shape<AccountEnvelope> = {
  data: accountInternalSchema,
};

export const accountEnvelopeInternalSchema: Schema<AccountEnvelope> = s.object<AccountEnvelope>(
  accountEnvelopeProperties,
  { additionalProperties: s.json() },
);

export const accountEnvelopeSchema: Schema<AccountEnvelope> = s.lazySchema(() =>
  s.object<AccountEnvelope>(
    {
      ...accountEnvelopeProperties,
      data: accountSchema,
    },
    { additionalProperties: s.json() },
  ),
);
