using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using S1.Core.Validation.Attributes;
using S1.Models.Enums;

namespace S1.Models;

public record SearchParameters
{
    [JsonPropertyName("query")]
    [MinLength(1)]
    public required string Query { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("search_service")]
    public SearchService? SearchService { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_results")]
    [Minimum(1)]
    [Maximum(50)]
    public int? MaxResults { get; init; } = 5;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    [Minimum(1)]
    [Maximum(100)]
    public int? Page { get; init; } = 1;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crawl_results")]
    [Minimum(0)]
    [Maximum(50)]
    public int? CrawlResults { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public bool? Image { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include_sites")]
    public IReadOnlyList<string>? IncludeSites { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclude_sites")]
    public IReadOnlyList<string>? ExcludeSites { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public string? Language { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("time_range")]
    public TimeRange? TimeRange { get; init; }
}
