using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record IndexDetail
{
    /// <summary>
    /// Unique stock index identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Index display name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Index symbol
    /// </summary>
    [JsonPropertyName("symbol")]
    public required string Symbol { get; init; }

    /// <summary>
    /// True if the index spans multiple Nordic exchanges (e.g. OMXN40), false if tied to a single exchange (e.g. OMXS30)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pan_nordic")]
    public bool? PanNordic { get; init; }

    /// <summary>
    /// Exchange associated with this index
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange")]
    public ExchangeNordicFinancialNewsIndicesApi? Exchange { get; init; }

    /// <summary>
    /// Index description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Number of distinct companies in this index (may be less than constituents when a company has multiple share classes)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companies_count")]
    public int? CompaniesCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
