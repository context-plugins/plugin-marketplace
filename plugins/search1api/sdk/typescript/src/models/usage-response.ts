import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { credentialTypeSchema, type CredentialType } from "./credential-type.js";

export type UsageResponse = {
  usage: number;
  userId?: string | null;
  credentialType: CredentialType;
  clientId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usageResponseProperties: s.Shape<UsageResponse> = {
  usage: s.int(),
  userId: s.optionalNullable(s.string()),
  credentialType: credentialTypeSchema,
  clientId: s.optionalNullable(s.string()),
  _keysMap: {
    userId: "user_id",
    credentialType: "credential_type",
    clientId: "client_id",
  },
};

export const usageResponseInternalSchema: Schema<UsageResponse> = s.object<UsageResponse>(
  usageResponseProperties,
  { additionalProperties: s.json() },
);

export const usageResponseSchema: Schema<UsageResponse> = s.lazySchema(() =>
  s.object<UsageResponse>(
    {
      ...usageResponseProperties,
      usage: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
