using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Citations and reasoning supporting one field of a task output.
/// </summary>
public record FieldBasis
{
    /// <summary>
    /// Name of the output field.
    /// </summary>
    [JsonPropertyName("field")]
    public required string Field { get; init; }

    /// <summary>
    /// List of citations supporting the output field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("citations")]
    public IReadOnlyList<Citation>? Citations { get; init; }

    /// <summary>
    /// Reasoning for the output field.
    /// </summary>
    [JsonPropertyName("reasoning")]
    public required string Reasoning { get; init; }

    /// <summary>
    /// Confidence level for the output field. Only certain processors provide confidence levels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confidence")]
    public Confidence? Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
