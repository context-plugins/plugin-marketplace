using System.Collections.Generic;
using System.Text.Json.Serialization;
using Applike.Core.Models;

namespace Applike.Models;

public record ListBidsResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<BidOutput> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
