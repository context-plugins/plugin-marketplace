using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// A paginated list of bases accessible to the authenticated user.
/// </summary>
public record BaseList
{
    [JsonPropertyName("bases")]
    public required IReadOnlyList<BaseSummary> Bases { get; init; }

    /// <summary>
    /// Pagination cursor for the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public string? Offset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
