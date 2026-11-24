using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record WatchlistSummary
{
    /// <summary>
    /// Unique watchlist identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// User-defined watchlist name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Display order (lower values appear first)
    /// </summary>
    [JsonPropertyName("position")]
    public required int Position { get; init; }

    /// <summary>
    /// Number of companies in the watchlist
    /// </summary>
    [JsonPropertyName("company_count")]
    public required int CompanyCount { get; init; }

    /// <summary>
    /// When the watchlist was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// When the watchlist was last modified
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
