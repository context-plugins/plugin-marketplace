using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The view of an API.
/// </summary>
public record GoogleCloudApihubV1ApiView
{
    /// <summary>
    /// MCP server view.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcpServerView")]
    public GoogleCloudApihubV1FlattenedApiVersionDeploymentView2? McpServerView { get; init; }

    /// <summary>
    /// MCP tools view.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcpToolView")]
    public GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView1? McpToolView { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
