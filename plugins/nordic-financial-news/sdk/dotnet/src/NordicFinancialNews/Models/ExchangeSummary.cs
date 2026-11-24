using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ExchangeSummary
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
