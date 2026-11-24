using System.Collections.Generic;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

public record ConnectionList
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<Connection> Data { get; init; }

    /// <summary>
    /// Always <c>null</c>: not paginated.
    /// </summary>
    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
