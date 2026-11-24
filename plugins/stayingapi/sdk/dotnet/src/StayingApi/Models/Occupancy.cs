using System.Collections.Generic;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation.Attributes;

namespace StayingApi.Models;

public record Occupancy
{
    [JsonPropertyName("adults")]
    [Maximum(2147483647)]
    [ExclusiveMinimum(0)]
    public required int Adults { get; init; }

    [JsonPropertyName("children")]
    [Minimum(0)]
    [Maximum(2147483647)]
    public required int Children { get; init; }

    [JsonPropertyName("childAges")]
    public required IReadOnlyList<int> ChildAges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
