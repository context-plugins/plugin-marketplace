using System.Collections.Generic;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

public record LocationList
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<Location> Data { get; init; }

    /// <summary>
    /// Always <c>null</c>: not paginated.
    /// </summary>
    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
