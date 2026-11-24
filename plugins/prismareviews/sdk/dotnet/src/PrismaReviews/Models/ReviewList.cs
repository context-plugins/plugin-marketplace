using System.Collections.Generic;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

/// <summary>
/// A page of reviews.
/// </summary>
public record ReviewList
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<Review> Data { get; init; }

    /// <summary>
    /// Pass it as <c>cursor</c>, with the same filters, for the next page. <c>null</c> on the last page.
    /// </summary>
    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
