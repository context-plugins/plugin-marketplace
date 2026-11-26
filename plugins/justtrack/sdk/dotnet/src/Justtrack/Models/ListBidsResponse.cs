using System.Collections.Generic;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

public record ListBidsResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<BidOutput> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
