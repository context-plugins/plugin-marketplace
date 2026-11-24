using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record CompanyDetail
{
    /// <summary>
    /// Unique company identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Company name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// URL-friendly company name
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// Primary stock ticker (null if unlisted)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ticker")]
    public string? Ticker { get; init; }

    /// <summary>
    /// Tickers the company was formerly listed under, from delisted or renamed listings, excluding any that are still a current ticker. Always present; empty when none. The ticker filter resolves former tickers as well as the current one, so a match on an old ticker still returns the company; this field tells you the ticker you searched by is historical.
    /// </summary>
    [JsonPropertyName("former_tickers")]
    public required IReadOnlyList<string> FormerTickers { get; init; }

    /// <summary>
    /// Whether the company is currently active/operating
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_active")]
    public bool? IsActive { get; init; }

    /// <summary>
    /// Primary exchange where the company is listed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange")]
    public Exchange? Exchange { get; init; }

    /// <summary>
    /// The company's other active listings, excluding the primary listing above: cross-listings on other exchanges and additional share classes (which may be on the same exchange). Always present; empty when the company is single-listed or unlisted. The row's ticker/exchange fields are the primary listing only. Company detail stock_listings is the authoritative full set.
    /// </summary>
    [JsonPropertyName("also_listed_on")]
    public required IReadOnlyList<AlsoListedOn> AlsoListedOn { get; init; }

    /// <summary>
    /// Company description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Industry sector
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sector")]
    public string? Sector { get; init; }

    /// <summary>
    /// Company website
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    /// <summary>
    /// Number of articles mentioning this company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("article_count")]
    public int? ArticleCount { get; init; }

    /// <summary>
    /// Number of stories mentioning this company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_count")]
    public int? StoryCount { get; init; }

    /// <summary>
    /// Parent company, if this is a subsidiary
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_company")]
    public ParentCompany? ParentCompany { get; init; }

    /// <summary>
    /// Subsidiary companies
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subsidiaries")]
    public IReadOnlyList<Subsidiary>? Subsidiaries { get; init; }

    /// <summary>
    /// Stock index memberships (e.g. OMXS30)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("indices")]
    public IReadOnlyList<IndexModel>? Indices { get; init; }

    /// <summary>
    /// All stock listings across exchanges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stock_listings")]
    public IReadOnlyList<StockListing>? StockListings { get; init; }

    /// <summary>
    /// Country where the company is domiciled
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public Country? Country { get; init; }

    /// <summary>
    /// Official company registry data from Nordic registries (e.g. Bolagsverket, PRH). Null if no registry data exists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registry")]
    public Registry? Registry { get; init; }

    /// <summary>
    /// When the company was last updated (ISO 8601)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
