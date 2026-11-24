using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record FeatureSummary
{
    /// <summary>
    /// Auth0 maintainers of this feature
    /// </summary>
    [JsonPropertyName("maintainers")]
    public required IReadOnlyList<string> Maintainers { get; init; }

    [JsonPropertyName("links")]
    public required IReadOnlyList<Link> Links { get; init; }

    [JsonPropertyName("markdown")]
    public required string Markdown { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
