using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record InsiderTradesTopInsider
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Officer title from the filing; empty when the filer reports as a director only.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("event_count")]
    public required int EventCount { get; init; }

    /// <summary>
    /// Buys minus sells in USD over the last 12 months, as a decimal string; positive means a net buyer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("net_value_usd")]
    public string? NetValueUsd { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
