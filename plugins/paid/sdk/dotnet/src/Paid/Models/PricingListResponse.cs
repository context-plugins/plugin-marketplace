using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record PricingListResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<PricingResponse> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
