using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AllocationDoiTAnomaliesApi
{
    /// <summary>
    /// Allocation ID. Use it with the Allocations API to read the allocation.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Allocation name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
