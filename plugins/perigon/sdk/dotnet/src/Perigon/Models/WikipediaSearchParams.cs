using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Core.Validation.Attributes;

namespace Perigon.Models;

public record WikipediaSearchParams
{
    /// <summary>
    /// Natural language query to search the Wikipedia pages database
    /// </summary>
    [JsonPropertyName("prompt")]
    [StringLength(1024, MinimumLength = 0)]
    public required string Prompt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public WikipediaSearchFilter? Filter { get; init; }

    /// <summary>
    /// 'wikiRevisionFrom' filter, will search pages modified after the specified date, the date could be passed as ISO or 'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wikiRevisionFrom")]
    public DateTimeOffset? WikiRevisionFrom { get; init; }

    /// <summary>
    /// 'wikiRevisionFrom' filter, will search pages modified before the specified date, the date could be passed as ISO or 'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wikiRevisionTo")]
    public DateTimeOffset? WikiRevisionTo { get; init; }

    /// <summary>
    /// 'pageviewsFrom' filter, will search pages with at least the provided number of views per day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageviewsFrom")]
    public long? PageviewsFrom { get; init; }

    /// <summary>
    /// 'pageviewsFrom' filter, will search pages with at most the provided number of views per day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageviewsTo")]
    public long? PageviewsTo { get; init; }

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
