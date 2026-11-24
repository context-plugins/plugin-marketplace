import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { credentialSummarySchema, type CredentialSummary } from "./credential-summary.js";

export type ApiV1ManageTokensResponse = {
  tokens: CredentialSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageTokensResponseSchema: Schema<ApiV1ManageTokensResponse> =
  s.object<ApiV1ManageTokensResponse>(
    {
      tokens: s.array(s.lazy(() => credentialSummarySchema)),
    },
    { additionalProperties: s.json() },
  );
