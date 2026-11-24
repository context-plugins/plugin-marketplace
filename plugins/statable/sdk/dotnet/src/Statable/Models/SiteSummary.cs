using System;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record SiteSummary
{
    /// <summary>
    /// The numeric id you pass as <c>site_id</c> to /query.
    /// </summary>
    [JsonPropertyName("site_id")]
    public required long SiteId { get; init; }

    /// <summary>
    /// The site's domain. For the configured public demo site this is masked to <c>example.com</c> — see "The demo site is masked" in docs/public-api-v1.md; breakdown values carrying the host are masked the same way.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The site's public token, used by widget script URLs and the shared dashboard link. Integrations need it and previously had to parse it out of a widget snippet URL — which only worked for hobby sites, since a paid site's tracker URL is keyed by the numeric id.
    /// </summary>
    [JsonPropertyName("hash")]
    public required string Hash { get; init; }

    /// <summary>
    /// The site's reporting timezone.
    /// </summary>
    [JsonPropertyName("timezone")]
    public required string Timezone { get; init; }

    /// <summary>
    /// True for a site on the free plan. It decides how the site counts at all: a hobby site is tracked by the bundled <c>/t/</c> build (widget plus counter) carrying a <c>data-id</c> attribute, and an event reaching us from any other build is refused. Install <c>GET /sites/{id}/snippet</c> verbatim and this is handled for you; branch on it only if you build the tag yourself.
    /// </summary>
    [JsonPropertyName("hobby")]
    public required bool Hobby { get; init; }

    /// <summary>
    /// Stored value only (not computed on the fly); null if not yet computed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats_start_date")]
    public DateTimeOffset? StatsStartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public SiteStats? Stats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
