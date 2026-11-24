using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record SiteDetail
{
    [JsonPropertyName("site_id")]
    public required long SiteId { get; init; }

    /// <summary>
    /// The site url as stored.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Same token as in SiteSummary.hash.
    /// </summary>
    [JsonPropertyName("hash")]
    public required string Hash { get; init; }

    [JsonPropertyName("timezone")]
    public required string Timezone { get; init; }

    [JsonPropertyName("week_start")]
    public required int WeekStart { get; init; }

    [JsonPropertyName("hobby")]
    public required bool Hobby { get; init; }

    [JsonPropertyName("script_url")]
    public required string ScriptUrl { get; init; }

    /// <summary>
    /// The ready-to-paste script tag.
    /// </summary>
    [JsonPropertyName("snippet")]
    public required string Snippet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
