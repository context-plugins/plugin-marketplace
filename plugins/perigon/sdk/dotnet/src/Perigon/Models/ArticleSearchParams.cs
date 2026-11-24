using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Core.Validation.Attributes;

namespace Perigon.Models;

public record ArticleSearchParams
{
    /// <summary>
    /// Natural language query to search the news articles database
    /// </summary>
    [JsonPropertyName("prompt")]
    [StringLength(1024, MinimumLength = 0)]
    public required string Prompt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public ArticleSearchFilter? Filter { get; init; }

    /// <summary>
    /// 'pubDateFrom' filter, will search articles published after the specified date, the date could be passed as ISO or 'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00 - Default: Only articles with a pubDate within the last 30 days of the request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pubDateFrom")]
    public DateTimeOffset? PubDateFrom { get; init; }

    /// <summary>
    /// 'pubDateTo' filter, will search articles published before the specified date, the date could be passed as ISO or 'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pubDateTo")]
    public DateTimeOffset? PubDateTo { get; init; }

    /// <summary>
    /// Whether to return reprints in the response or not. Reprints are usually wired articles from sources like AP or Reuters that are reprinted in multiple sources at the same time. By default, this parameter is 'true'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showReprints")]
    public bool? ShowReprints { get; init; } = true;

    /// <summary>
    /// The number of items per page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    [Minimum(1)]
    [Maximum(100)]
    public int? Size { get; init; } = 10;

    /// <summary>
    /// The page number to retrieve.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    [Minimum(0)]
    [Maximum(10000)]
    public int? Page { get; init; } = 0;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
