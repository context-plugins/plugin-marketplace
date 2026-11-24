using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Usage item for a single operation.
/// </summary>
public record UsageItem
{
    /// <summary>
    /// Name of the SKU.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Count of the SKU.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
