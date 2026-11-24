using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// MCP (Model Context Protocol) server configuration.
/// </summary>
public record GoogleCloudApihubV1McpServerConfig1
{
    /// <summary>
    /// Required. The tools to expose on the MCP server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tools")]
    public IReadOnlyList<GoogleCloudApihubV1McpToolConfig>? Tools { get; init; }

    /// <summary>
    /// Optional. The target Apigee X configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apigeeXTargetDetails")]
    public GoogleCloudApihubV1ApigeeXTargetDetails1? ApigeeXTargetDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
