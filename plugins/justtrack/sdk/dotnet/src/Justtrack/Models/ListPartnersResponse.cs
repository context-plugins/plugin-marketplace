using System.Collections.Generic;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

public record ListPartnersResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<PartnerOutput> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
