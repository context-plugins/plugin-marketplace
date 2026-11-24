using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReviewsResponse1
{
    [JsonPropertyName("reviews")]
    public required IReadOnlyList<Review> Reviews { get; init; }

    /// <summary>
    /// Pass back as ?cursor= for the next page. Null means this is the end.
    /// </summary>
    [JsonPropertyName("nextCursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
