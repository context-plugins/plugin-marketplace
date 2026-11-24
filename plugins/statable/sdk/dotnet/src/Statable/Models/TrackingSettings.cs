using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record TrackingSettings
{
    [JsonPropertyName("site_id")]
    public required long SiteId { get; init; }

    /// <summary>
    /// Catalogue version.
    /// </summary>
    [JsonPropertyName("version")]
    public required int Version { get; init; }

    /// <summary>
    /// The build actually served for this site.
    /// </summary>
    [JsonPropertyName("bundle")]
    public required string Bundle { get; init; }

    [JsonPropertyName("enabled")]
    public required IReadOnlyList<string> Enabled { get; init; }

    [JsonPropertyName("features")]
    public required IReadOnlyList<TrackingFeatureState> Features { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
