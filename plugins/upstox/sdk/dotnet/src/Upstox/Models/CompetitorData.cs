using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record CompetitorData
{
    /// <summary>
    /// Business description of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_profile")]
    public string? CompanyProfile { get; init; }

    /// <summary>
    /// Sector the company belongs to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sector")]
    public string? Sector { get; init; }

    /// <summary>
    /// Sector market capitalisation in INR
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sector_market_cap_inr")]
    public SectorMarketCapAmount2? SectorMarketCapInr { get; init; }

    /// <summary>
    /// Sector market capitalisation in USD
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sector_market_cap_usd")]
    public SectorMarketCapAmount1? SectorMarketCapUsd { get; init; }

    /// <summary>
    /// Instrument key of the competitor company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_key")]
    public string? InstrumentKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
