using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.OneOf;

namespace ParallelSdk.Models;

public record MemoryRetrieveResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<Result> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
