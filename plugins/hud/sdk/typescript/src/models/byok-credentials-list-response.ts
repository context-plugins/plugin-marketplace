import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { byokCredentialItemSchema, type ByokCredentialItem } from "./byok-credential-item.js";
import { byokProviderOptionSchema, type ByokProviderOption } from "./byok-provider-option.js";

export type ByokCredentialsListResponse = {
  credentials: ByokCredentialItem[];
  providers: ByokProviderOption[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const byokCredentialsListResponseSchema: Schema<ByokCredentialsListResponse> =
  s.object<ByokCredentialsListResponse>(
    {
      credentials: s.array(s.lazy(() => byokCredentialItemSchema)),
      providers: s.array(s.lazy(() => byokProviderOptionSchema)),
    },
    { additionalProperties: s.json() },
  );
