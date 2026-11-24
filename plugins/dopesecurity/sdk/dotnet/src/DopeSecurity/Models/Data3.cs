using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Data3
{
    [JsonPropertyName("policies")]
    public required IReadOnlyList<Policy> Policies { get; init; }

    /// <summary>
    /// Information about current and next page for cursor based pagination
    /// </summary>
    [JsonPropertyName("pageInfo")]
    public required PaginationResponse PageInfo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
