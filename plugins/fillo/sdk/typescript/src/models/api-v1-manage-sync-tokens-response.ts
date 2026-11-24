import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { credentialSummarySchema, type CredentialSummary } from "./credential-summary.js";

export type ApiV1ManageSyncTokensResponse = {
  tokens: CredentialSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageSyncTokensResponseSchema: Schema<ApiV1ManageSyncTokensResponse> =
  s.object<ApiV1ManageSyncTokensResponse>(
    {
      tokens: s.array(s.lazy(() => credentialSummarySchema)),
    },
    { additionalProperties: s.json() },
  );
