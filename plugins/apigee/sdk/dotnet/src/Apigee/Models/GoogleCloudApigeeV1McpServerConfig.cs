using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Deployed MCP server configuration for an organization. Response for GetMcpServerConfig. Org-scoped singleton: each organization has exactly one McpServerConfig. Multiple logical MCP servers within the same org are expressed inside the Cloud Storage blob (McpServerConfigData.hosts map), not as multiple McpServerConfig resources.
/// </summary>
public record GoogleCloudApigeeV1McpServerConfig
{
    /// <summary>
    /// Output only. Time at which this McpServerConfig revision was created. Mirrors IngressConfig.revision_create_time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionCreateTime")]
    public string? RevisionCreateTime { get; init; }

    /// <summary>
    /// Output only. Cloud Storage URI to the McpServerConfigData blob in the Apigee tenant project bucket. The sidecar fetches this URI using Cloud Storage, and deserializes the. protojson blob to McpServerConfigData. Treat this as an opaque URI — its format may change. Example: gs://{apigee-tp-bucket}/apigee-mcp-config-{org}-{revision_id}.json
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcpServerConfigDataLocation")]
    public string? McpServerConfigDataLocation { get; init; }

    /// <summary>
    /// Output only. Revision ID that defines the ordering on McpServerConfig revisions. Higher values indicate more recently deployed configurations. Monotonically non-decreasing per organization. Mirrors IngressConfig.revision_id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// Output only. Unique ID for the McpServerConfig that will only change if the organization is deleted and recreated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Identifier. Resource name in the singleton form: organizations/{org}/mcpServerConfig
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
