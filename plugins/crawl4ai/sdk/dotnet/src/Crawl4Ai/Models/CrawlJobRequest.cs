using System.Collections.Generic;
using System.Text.Json.Serialization;
using Crawl4Ai.Core.Models;

namespace Crawl4Ai.Models;

public record CrawlJobRequest
{
    /// <summary>
    /// List of URLs to crawl
    /// </summary>
    [JsonPropertyName("urls")]
    public required IReadOnlyList<string> Urls { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
