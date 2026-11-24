using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Models.Enums;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Result of the index status analysis.
/// </summary>
public record IndexStatusInspectionResult2
{
    /// <summary>
    /// Whether or not the page blocks indexing through a noindex rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("indexingState")]
    public IndexingState? IndexingState { get; init; }

    /// <summary>
    /// The URL that your page or site <see href="https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?#define-canonical">declares as canonical</see>. If you did not declare a canonical URL, this field is absent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userCanonical")]
    public string? UserCanonical { get; init; }

    /// <summary>
    /// Primary crawler that was used by Google to crawl your site.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crawledAs")]
    public CrawledAs? CrawledAs { get; init; }

    /// <summary>
    /// Could Google find and index the page. More details about page indexing appear in 'indexing_state'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coverageState")]
    public string? CoverageState { get; init; }

    /// <summary>
    /// URLs that link to the inspected URL, directly and indirectly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referringUrls")]
    public IReadOnlyList<string>? ReferringUrls { get; init; }

    /// <summary>
    /// Whether or not Google could retrieve the page from your server. Equivalent to <see href="https://support.google.com/webmasters/answer/9012289#index_coverage">"page fetch"</see> in the URL inspection report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageFetchState")]
    public PageFetchState? PageFetchState { get; init; }

    /// <summary>
    /// Whether or not the page is blocked to Google by a robots.txt rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("robotsTxtState")]
    public RobotsTxtState? RobotsTxtState { get; init; }

    /// <summary>
    /// High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verdict")]
    public Verdict1? Verdict { get; init; }

    /// <summary>
    /// The URL of the page that Google selected as canonical. If the page was not indexed, this field is absent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("googleCanonical")]
    public string? GoogleCanonical { get; init; }

    /// <summary>
    /// Any sitemaps that this URL was listed in, as known by Google. Not guaranteed to be an exhaustive list, especially if Google did not discover this URL through a sitemap. Absent if no sitemaps were found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sitemap")]
    public IReadOnlyList<string>? Sitemap { get; init; }

    /// <summary>
    /// Last time this URL was crawled by Google using the <see href="https://support.google.com/webmasters/answer/7440203#primary_crawler">primary crawler</see>. Absent if the URL was never crawled successfully.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastCrawlTime")]
    public string? LastCrawlTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
