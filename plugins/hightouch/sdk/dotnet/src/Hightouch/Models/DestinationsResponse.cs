using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record DestinationsResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<Destination> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
