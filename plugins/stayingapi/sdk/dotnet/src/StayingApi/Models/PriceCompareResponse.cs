using System.Text.Json.Serialization;
using StayingApi.Core.Models;

namespace StayingApi.Models;

public record PriceCompareResponse
{
    /// <summary>
    /// Endpoint-specific data payload.
    /// </summary>
    [JsonPropertyName("data")]
    public required AnyData2 Data { get; init; }

    /// <summary>
    /// Canonical response metadata present on every 200 (§6.3.3).
    /// </summary>
    [JsonPropertyName("meta")]
    public required Meta Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
