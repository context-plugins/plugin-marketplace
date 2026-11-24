using System.Collections.Generic;
using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record PersonsSearchResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<PersonSearchItem> Data { get; init; }

    /// <summary>
    /// Number of distinct persons found (before <c>limit</c> slicing).
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    /// <summary>
    /// Present when the internal scan limit was reached and results may be incomplete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
