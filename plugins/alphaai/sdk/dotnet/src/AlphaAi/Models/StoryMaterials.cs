using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record StoryMaterials
{
    [JsonPropertyName("story_id")]
    public required string StoryId { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<StoryMaterial> Results { get; init; }

    /// <summary>
    /// Opaque cursor for the next (newer) page; <c>null</c> at the end.
    /// </summary>
    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
