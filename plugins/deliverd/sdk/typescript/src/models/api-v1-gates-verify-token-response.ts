import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type ApiV1GatesVerifyTokenResponse = {
  valid: boolean;
  reason: Reason | null;
  gateId: string | null;
  expiresAt: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1GatesVerifyTokenResponseSchema: Schema<ApiV1GatesVerifyTokenResponse> =
  s.object<ApiV1GatesVerifyTokenResponse>(
    {
      valid: s.boolean(),
      reason: s.nullable(s.lazy(() => reasonSchema)),
      gateId: s.nullable(s.string()),
      expiresAt: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
