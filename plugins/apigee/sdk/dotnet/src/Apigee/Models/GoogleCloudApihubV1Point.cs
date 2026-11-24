using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Point within the file (line and character).
/// </summary>
public record GoogleCloudApihubV1Point
{
    /// <summary>
    /// Required. Line number (zero-indexed).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line")]
    public int? Line { get; init; }

    /// <summary>
    /// Required. Character position within the line (zero-indexed).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("character")]
    public int? Character { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
