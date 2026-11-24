using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// A tool exposed by the MCP server. Each tool wraps exactly one API Hub operation under a caller-supplied identifier.
/// </summary>
public record GoogleCloudApihubV1McpToolConfig
{
    /// <summary>
    /// Required. Caller-supplied identifier for the tool; each tool must have a unique identifier. This will be by used by agents to invoke the tool. Tool ID must be unique across all tools in the given MCP server configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toolId")]
    public string? ToolId { get; init; }

    /// <summary>
    /// Required. Description of what the tool does and how it is used. Description serves as key reference for the agent to know about the tool capabilities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Required. The API Hub operation this tool exposes. Each tool wraps exactly one operation; callers that want to expose multiple operations should declare multiple tools.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation")]
    public GoogleCloudApihubV1OperationConfig2? Operation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
