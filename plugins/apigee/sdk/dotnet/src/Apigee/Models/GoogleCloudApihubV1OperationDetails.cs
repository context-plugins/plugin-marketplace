using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The operation details parsed from the spec.
/// </summary>
public record GoogleCloudApihubV1OperationDetails
{
    /// <summary>
    /// Optional. Description of the operation behavior. For OpenAPI spec, this will map to <c>operation.description</c> in the spec, in case description is empty, <c>operation.summary</c> will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The HTTP Operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpOperation")]
    public GoogleCloudApihubV1HttpOperation? HttpOperation { get; init; }

    /// <summary>
    /// Optional. For OpenAPI spec, this will be set if <c>operation.deprecated</c>is marked as <c>true</c> in the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deprecated")]
    public bool? Deprecated { get; init; }

    /// <summary>
    /// Optional. Additional external documentation for this operation. For OpenAPI spec, this will map to <c>operation.documentation</c> in the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentation")]
    public GoogleCloudApihubV1Documentation8? Documentation { get; init; }

    /// <summary>
    /// The MCP Tool Operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcpTool")]
    public GoogleCloudApihubV1McpTool2? McpTool { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
