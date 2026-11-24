using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record StoriesPage
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<StoryCard> Results { get; init; }

    /// <summary>
    /// Opaque cursor for the next (older) page; <c>null</c> at the end.
    /// </summary>
    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
