using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

public record V3PaginationRequest
{
    [JsonPropertyName("page")]
    [Minimum(0)]
    [Maximum(1000)]
    public int Page { get; init; } = 0;

    [JsonPropertyName("size")]
    [Minimum(10)]
    [Maximum(100)]
    public int Size { get; init; } = 25;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
