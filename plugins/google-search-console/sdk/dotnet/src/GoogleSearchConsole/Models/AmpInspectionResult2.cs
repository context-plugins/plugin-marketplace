using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Models.Enums;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Result of the AMP analysis. Absent if the page is not an AMP page.
/// </summary>
public record AmpInspectionResult2
{
    /// <summary>
    /// Whether or not Google could fetch the AMP.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageFetchState")]
    public PageFetchState1? PageFetchState { get; init; }

    /// <summary>
    /// Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastCrawlTime")]
    public string? LastCrawlTime { get; init; }

    /// <summary>
    /// A list of zero or more AMP issues found for the inspected URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issues")]
    public IReadOnlyList<AmpIssue>? Issues { get; init; }

    /// <summary>
    /// Whether or not the page blocks indexing through a noindex rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("indexingState")]
    public IndexingState1? IndexingState { get; init; }

    /// <summary>
    /// Index status of the AMP URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ampIndexStatusVerdict")]
    public AmpIndexStatusVerdict? AmpIndexStatusVerdict { get; init; }

    /// <summary>
    /// URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP version will be inspected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ampUrl")]
    public string? AmpUrl { get; init; }

    /// <summary>
    /// The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verdict")]
    public Verdict2? Verdict { get; init; }

    /// <summary>
    /// Whether or not the page is blocked to Google by a robots.txt rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("robotsTxtState")]
    public RobotsTxtState? RobotsTxtState { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
