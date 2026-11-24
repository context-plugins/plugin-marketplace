using System.Text.Json.Serialization;
using Zillapi.Core.Models;

namespace Zillapi.Models;

public record PriceHistoryEvent
{
    /// <summary>
    /// Event date (YYYY-MM-DD).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date")]
    public string? Date { get; init; }

    /// <summary>
    /// e.g. "Listed for sale", "Sold".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event")]
    public string? Event { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public double? Price { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priceChangeRate")]
    public double? PriceChangeRate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
