import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destination13Schema, type Destination13 } from "./destination13.js";

export type ApiV1GatesVerifyTokenRequest = {
  /** The `decisionToken` the gate carried */
  token: string;
  /** The action you are about to perform */
  action: string;
  /** The input you are about to perform it with */
  input: Record<string, unknown>;
  /** Where it lands. Required when the gate named a destination */
  destination?: Destination13;
  /** The sha256 of what you are sending. Required when the gate named an artifact */
  artifactSha256?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1GatesVerifyTokenRequestProperties: s.Shape<ApiV1GatesVerifyTokenRequest> = {
  token: s.string(),
  action: s.string(),
  input: s.record(s.string(), s.unknown()),
  destination: s.optional(s.lazy(() => destination13Schema)),
  artifactSha256: s.optional(s.string()),
};

export const apiV1GatesVerifyTokenRequestInternalSchema: Schema<ApiV1GatesVerifyTokenRequest> =
  s.object<ApiV1GatesVerifyTokenRequest>(apiV1GatesVerifyTokenRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1GatesVerifyTokenRequestSchema: Schema<ApiV1GatesVerifyTokenRequest> = s.lazySchema(() =>
  s.object<ApiV1GatesVerifyTokenRequest>(
    {
      ...apiV1GatesVerifyTokenRequestProperties,
      token: s.string().check(s.minLength(1), s.maxLength(8192)),
      action: s.string().check(s.pattern("^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*)+$")),
      artifactSha256: s.optional(s.string().check(s.pattern("^[0-9a-f]{64}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
