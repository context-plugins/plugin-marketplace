using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// List of sitemaps.
/// </summary>
public record SitemapsListResponse
{
    /// <summary>
    /// Contains detailed information about a specific URL submitted as a <see href="https://support.google.com/webmasters/answer/156184">sitemap</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sitemap")]
    public IReadOnlyList<WmxSitemap>? Sitemap { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
