using System.Collections.Generic;
using System.Text.Json.Serialization;
using Applike.Core.Models;

namespace Applike.Models;

public record ListPartnersResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<PartnerOutput> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
