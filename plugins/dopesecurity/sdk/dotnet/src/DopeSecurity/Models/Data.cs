using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Data
{
    /// <summary>
    /// Information about current and next page for cursor based pagination
    /// </summary>
    [JsonPropertyName("pageInfo")]
    public required PaginationResponse PageInfo { get; init; }

    [JsonPropertyName("customCategories")]
    public required IReadOnlyList<string> CustomCategories { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
