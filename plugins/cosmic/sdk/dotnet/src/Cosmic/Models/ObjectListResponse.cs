using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

public record ObjectListResponse
{
    [JsonPropertyName("objects")]
    public required IReadOnlyList<ObjectModel> Objects { get; init; }

    /// <summary>
    /// Total number of Objects matching the query, ignoring <c>limit</c> and <c>skip</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public int? Total { get; init; }

    /// <summary>
    /// The <c>limit</c> applied to this response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
