using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Models.Enums;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Contains detailed information about a specific URL submitted as a <see href="https://support.google.com/webmasters/answer/156184">sitemap</see>.
/// </summary>
public record WmxSitemap
{
    /// <summary>
    /// The type of the sitemap. For example: <c>rssFeed</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeGoogleSearchConsoleSitemapsApi? Type { get; init; }

    /// <summary>
    /// The various content types in the sitemap.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contents")]
    public IReadOnlyList<WmxSitemapContent>? Contents { get; init; }

    /// <summary>
    /// Date &amp; time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastSubmitted")]
    public string? LastSubmitted { get; init; }

    /// <summary>
    /// If true, the sitemap is a collection of sitemaps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isSitemapsIndex")]
    public bool? IsSitemapsIndex { get; init; }

    /// <summary>
    /// The url of the sitemap.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// Date &amp; time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastDownloaded")]
    public string? LastDownloaded { get; init; }

    /// <summary>
    /// If true, the sitemap has not been processed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isPending")]
    public bool? IsPending { get; init; }

    /// <summary>
    /// Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("warnings")]
    public string? Warnings { get; init; }

    /// <summary>
    /// Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public string? Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
