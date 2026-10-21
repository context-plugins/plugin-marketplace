import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiCredentialRolesSchemaSchema,
  type ApiCredentialRolesSchema,
} from "./api-credential-roles-schema.js";

export type ApiCredentialCreateResponseSchema = {
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
  /**
   * Client Secret for the API Credential. The Client Secret is sensitive information and should be
   * kept private. Returned only in the <code>POST</code> response when the API Credential is
   * created. Never returned in <code>GET</code> responses. If you need the Client Secret again, you
   * must rotate credentials and retrieve the new Client Secret from the <code>POST</code> response.
   */
  clientSecret: string;
};

export const apiCredentialCreateResponseSchemaSchema: Schema<ApiCredentialCreateResponseSchema> =
  s.object<ApiCredentialCreateResponseSchema>({
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
    clientSecret: s.string(),
  });
