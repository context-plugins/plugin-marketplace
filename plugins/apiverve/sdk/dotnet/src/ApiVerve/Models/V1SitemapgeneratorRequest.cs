using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1SitemapgeneratorRequest
{
    /// <summary>
    /// Array of URLs (strings or objects with url, priority, changeFreq, lastMod)
    /// </summary>
    [JsonPropertyName("urls")]
    public required string Urls { get; init; }

    /// <summary>
    /// Base URL to prepend to relative paths
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baseUrl")]
    public string? BaseUrl { get; init; }

    /// <summary>
    /// Default change frequency
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changeFreq")]
    public string? ChangeFreq { get; init; }

    /// <summary>
    /// Default priority
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priority")]
    public double? Priority { get; init; }

    /// <summary>
    /// Include lastmod dates in sitemap
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeLastMod")]
    public bool? IncludeLastMod { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
