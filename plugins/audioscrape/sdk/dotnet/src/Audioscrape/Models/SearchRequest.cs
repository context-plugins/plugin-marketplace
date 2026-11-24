using System.Text.Json.Serialization;
using Audioscrape.Core.Models;
using Audioscrape.Core.Validation.Attributes;

namespace Audioscrape.Models;

/// <summary>
/// API v1 Search Request - simplified for external API users
/// </summary>
public record SearchRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public SearchFilters? Filters { get; init; }

    /// <summary>
    /// Results to return, 1–100; outside that range is a 400. Page with <c>offset</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(100)]
    public int? Limit { get; init; } = 20;

    /// <summary>
    /// Result offset for pagination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    [Minimum(0)]
    public int? Offset { get; init; } = 0;

    /// <summary>
    /// Natural-language or keyword query.
    /// </summary>
    [JsonPropertyName("query")]
    public required string Query { get; init; }

    /// <summary>
    /// One of <c>"text"</c>, <c>"semantic"</c>, or <c>"hybrid"</c>. Defaults to auto-detect:
    /// queries with boolean operators / quoted phrases use <c>"text"</c>, others <c>"hybrid"</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("search_type")]
    public string? SearchType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sort")]
    public SortOptions? Sort { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
