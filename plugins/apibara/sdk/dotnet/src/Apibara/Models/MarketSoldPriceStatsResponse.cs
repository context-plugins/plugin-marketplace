using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

public record MarketSoldPriceStatsResponse
{
    [JsonPropertyName("ok")]
    public required bool Ok { get; init; }

    [JsonPropertyName("data")]
    public required Data Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
