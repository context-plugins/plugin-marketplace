using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record CoverageArchiveDays
{
    /// <summary>
    /// Days; 0 means unlimited.
    /// </summary>
    [JsonPropertyName("free")]
    public required int Free { get; init; }

    [JsonPropertyName("basic")]
    public required int Basic { get; init; }

    [JsonPropertyName("pro")]
    public required int Pro { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
