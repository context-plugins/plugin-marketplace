using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Input model for FindAll ingest.
/// </summary>
public record IngestInput
{
    /// <summary>
    /// Natural language objective to create a FindAll run spec.
    /// </summary>
    [JsonPropertyName("objective")]
    public required string Objective { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
