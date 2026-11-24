using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request message for ApiHub.ConfigureAndDeployServer.
/// </summary>
public record GoogleCloudApihubV1ConfigureAndDeployServerRequest
{
    /// <summary>
    /// MCP (Model Context Protocol) server configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcpServerConfig")]
    public GoogleCloudApihubV1McpServerConfig1? McpServerConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
