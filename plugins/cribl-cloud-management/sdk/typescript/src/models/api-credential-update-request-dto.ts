import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiCredentialRolesSchemaSchema,
  type ApiCredentialRolesSchema,
} from "./api-credential-roles-schema.js";

export type ApiCredentialUpdateRequestDto = {
  /** Human-readable name of the API Credential. */
  name?: string;
  /** Brief description of the purpose and usage for the API Credential. */
  description?: string;
  /** If <code>true</code>, the API Credential is enabled. Otherwise, <code>false</code>. */
  enabled?: boolean;
  /** Role assignments for the API Credential. */
  roles?: ApiCredentialRolesSchema;
  /** Omit to leave unchanged. Pass an empty array to clear the stored IP allowlist. */
  ipAllowlist?: string[];
};

export const apiCredentialUpdateRequestDtoSchema: Schema<ApiCredentialUpdateRequestDto> =
  s.object<ApiCredentialUpdateRequestDto>({
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
    roles: s.optional(s.lazy(() => apiCredentialRolesSchemaSchema)),
    ipAllowlist: s.optional(s.array(s.string())),
  });
