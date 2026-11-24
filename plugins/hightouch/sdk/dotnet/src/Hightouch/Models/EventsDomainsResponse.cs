using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record EventsDomainsResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<EventDomain> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
