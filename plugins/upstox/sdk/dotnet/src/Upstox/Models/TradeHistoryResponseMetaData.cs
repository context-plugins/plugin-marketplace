using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record TradeHistoryResponseMetaData
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public TradeHistoryResponsePageData? Page { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
