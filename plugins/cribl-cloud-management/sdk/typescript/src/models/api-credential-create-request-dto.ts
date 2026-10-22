import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiCredentialRolesSchemaSchema,
  type ApiCredentialRolesSchema,
} from "./api-credential-roles-schema.js";

export type ApiCredentialCreateRequestDto = {
  /** Human-readable name of the API Credential. */
  name: string;
  /** Brief description of the purpose and usage for the API Credential. */
  description: string;
  /** If <code>true</code>, the API Credential is enabled. Otherwise, <code>false</code>. */
  enabled: boolean;
  /** Role assignments for the API Credential. */
  roles: ApiCredentialRolesSchema;
  /** CIDR range enforced as the IP allowlist for the API Credential. */
  ipAllowlist?: string[];
};

export const apiCredentialCreateRequestDtoSchema: Schema<ApiCredentialCreateRequestDto> =
  s.object<ApiCredentialCreateRequestDto>({
    name: s.string(),
    description: s.string(),
    enabled: s.boolean(),
    roles: apiCredentialRolesSchemaSchema,
    ipAllowlist: s.optional(s.array(s.string())),
  });
