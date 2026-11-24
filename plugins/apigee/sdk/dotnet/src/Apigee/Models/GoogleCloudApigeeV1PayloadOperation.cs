using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Represents a single operation identifier extracted from the request payload.
/// </summary>
public record GoogleCloudApigeeV1PayloadOperation
{
    /// <summary>
    /// Required. The operation name extracted from the request payload at runtime by the ParsePayload policy. For example, for MCP protocol requests, this could be <c>"tools/list"</c> or <c>"tools/call/get_weather"</c>. Wildcards are not supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation")]
    public string? Operation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
