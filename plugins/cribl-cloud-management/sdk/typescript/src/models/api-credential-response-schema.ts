import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiCredentialRolesSchemaSchema,
  type ApiCredentialRolesSchema,
} from "./api-credential-roles-schema.js";

export type ApiCredentialResponseSchema = {
  /** Human-readable name of the API Credential. */
  name: string;
  /** Brief description of the purpose and usage for the API Credential. */
  description: string;
  /** If <code>true</code>, the API Credential is enabled. Otherwise, <code>false</code>. */
  enabled: boolean;
  /** Unique ID of the Organization. */
  organizationId: string;
  /** Client ID for the API Credential. */
  clientId: string;
  /** Role assignments for the API Credential. */
  roles: ApiCredentialRolesSchema;
  /**
   * CIDR range enforced as the IP allowlist for the API Credential. An empty array means that the
   * API Credential has no IP restrictions.
   */
  ipAllowlist: string[];
  /** Member who created the API Credential. */
  createdBy: string;
  /** ISO 8601 timestamp when the API Credential was created. */
  createdDate: Date;
  /** Member who last updated the API Credential. */
  lastUpdatedBy: string;
  /** ISO 8601 timestamp when the API Credential was last updated. */
  lastUpdatedDate: Date;
};

export const apiCredentialResponseSchemaSchema: Schema<ApiCredentialResponseSchema> =
  s.object<ApiCredentialResponseSchema>({
    name: s.string(),
    description: s.string(),
    enabled: s.boolean(),
    organizationId: s.string(),
    clientId: s.string(),
    roles: apiCredentialRolesSchemaSchema,
    ipAllowlist: s.array(s.string()),
    createdBy: s.string(),
    createdDate: s.dateTime(),
    lastUpdatedBy: s.string(),
    lastUpdatedDate: s.dateTime(),
  });
