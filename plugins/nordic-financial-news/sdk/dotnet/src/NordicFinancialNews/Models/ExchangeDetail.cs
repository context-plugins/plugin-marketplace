using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ExchangeDetail
{
    /// <summary>
    /// Unique exchange identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Exchange display name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// ISO 10383 Market Identifier Code
    /// </summary>
    [JsonPropertyName("mic_code")]
    public required string MicCode { get; init; }

    /// <summary>
    /// Exchange acronym
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acronym")]
    public string? Acronym { get; init; }

    /// <summary>
    /// Country where the exchange is located
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public CountryNordicFinancialNewsExchangesApi? Country { get; init; }

    /// <summary>
    /// Parent operating MIC code (for segment exchanges)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operating_mic_code")]
    public string? OperatingMicCode { get; init; }

    /// <summary>
    /// Primary trading currency (ISO 4217)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    /// <summary>
    /// Ticker suffix used for this exchange
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ticker_suffix")]
    public string? TickerSuffix { get; init; }

    /// <summary>
    /// Exchange timezone
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timezone")]
    public string? Timezone { get; init; }

    /// <summary>
    /// City where the exchange is located
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    public string? City { get; init; }

    /// <summary>
    /// Stock indices on this exchange
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("indices")]
    public IReadOnlyList<IndexModel>? Indices { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
