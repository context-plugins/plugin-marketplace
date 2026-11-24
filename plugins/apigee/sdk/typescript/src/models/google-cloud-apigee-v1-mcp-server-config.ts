import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Deployed MCP server configuration for an organization. Response for GetMcpServerConfig.
 * Org-scoped singleton: each organization has exactly one McpServerConfig. Multiple logical MCP
 * servers within the same org are expressed inside the Cloud Storage blob
 * (McpServerConfigData.hosts map), not as multiple McpServerConfig resources.
 */
export type GoogleCloudApigeeV1McpServerConfig = {
  /**
   * Output only. Time at which this McpServerConfig revision was created. Mirrors
   * IngressConfig.revision_create_time.
   */
  revisionCreateTime?: string;
  /**
   * Output only. Cloud Storage URI to the McpServerConfigData blob in the Apigee tenant project
   * bucket. The sidecar fetches this URI using Cloud Storage, and deserializes the. protojson blob
   * to McpServerConfigData. Treat this as an opaque URI — its format may change. Example:
   * gs://{apigee-tp-bucket}/apigee-mcp-config-{org}-{revision_id}.json
   */
  mcpServerConfigDataLocation?: string;
  /**
   * Output only. Revision ID that defines the ordering on McpServerConfig revisions. Higher values
   * indicate more recently deployed configurations. Monotonically non-decreasing per organization.
   * Mirrors IngressConfig.revision_id.
   */
  revisionId?: string;
  /**
   * Output only. Unique ID for the McpServerConfig that will only change if the organization is
   * deleted and recreated.
   */
  uid?: string;
  /** Identifier. Resource name in the singleton form: organizations/{org}/mcpServerConfig */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1McpServerConfigSchema: Schema<GoogleCloudApigeeV1McpServerConfig> =
  s.object<GoogleCloudApigeeV1McpServerConfig>(
    {
      revisionCreateTime: s.optional(s.string()),
      mcpServerConfigDataLocation: s.optional(s.string()),
      revisionId: s.optional(s.string()),
      uid: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
