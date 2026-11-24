using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Native SQL Execution Data
/// </summary>
public record FallbackReason
{
    /// <summary>
    /// Optional. Fallback to Spark reason.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fallbackReason")]
    public string? FallbackReasonValue { get; init; }

    /// <summary>
    /// Optional. Fallback node information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fallbackNode")]
    public string? FallbackNode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
