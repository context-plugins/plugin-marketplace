using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

/// <summary>
/// Evaluate multiple flags in one request
/// </summary>
public record OfrepBulkEvaluationRequest
{
    /// <summary>
    /// Context information for flag evaluation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context")]
    public object? Context { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
