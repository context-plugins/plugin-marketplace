using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Aggregate counts for the batch.
/// </summary>
public record Summary
{
    /// <summary>
    /// Total number of tasks submitted in the batch.
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    /// <summary>
    /// Number of tasks successfully created.
    /// </summary>
    [JsonPropertyName("succeeded")]
    public required int Succeeded { get; init; }

    /// <summary>
    /// Number of tasks that failed validation or processing.
    /// </summary>
    [JsonPropertyName("failed")]
    public required int Failed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
