using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record AlsoListedOn
{
    /// <summary>
    /// Ticker on this secondary exchange
    /// </summary>
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    /// <summary>
    /// ISO 10383 Market Identifier Code of this exchange
    /// </summary>
    [JsonPropertyName("mic_code")]
    public required string MicCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
