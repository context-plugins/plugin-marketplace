using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The MCP Tool Operation.
/// </summary>
public record GoogleCloudApihubV1McpTool2
{
    /// <summary>
    /// Optional. Description of what the tool does.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Required. The name of the tool, unique within its parent scope (version).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. Input schema for the operation. This can be parsed only from MCP schema type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputSchema")]
    public GoogleCloudApihubV1OperationSchema3? InputSchema { get; init; }

    /// <summary>
    /// Optional. Optional title for the tool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Optional. Optional annotations for the tool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annotations")]
    public GoogleCloudApihubV1ToolAnnotations2? Annotations { get; init; }

    /// <summary>
    /// Optional. Output schema for the operation. This can be parsed only from MCP schema type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputSchema")]
    public GoogleCloudApihubV1OperationSchema1? OutputSchema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
