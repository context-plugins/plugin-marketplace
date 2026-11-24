using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1WebimagescraperRequest
{
    /// <summary>
    /// The URL of the website you want to scrape images from
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The limit of image URLs returned from your query
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxlinks")]
    public int? Maxlinks { get; init; }

    /// <summary>
    /// Keep query strings on the scraped image URLs instead of trimming them
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includequery")]
    public bool? Includequery { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
