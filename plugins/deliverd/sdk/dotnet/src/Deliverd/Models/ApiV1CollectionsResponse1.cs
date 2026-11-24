using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1CollectionsResponse1
{
    [JsonPropertyName("collections")]
    public required IReadOnlyList<Collection> Collections { get; init; }

    /// <summary>
    /// Pass back as ?cursor= for the next page. Null means this is the end.
    /// </summary>
    [JsonPropertyName("nextCursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
