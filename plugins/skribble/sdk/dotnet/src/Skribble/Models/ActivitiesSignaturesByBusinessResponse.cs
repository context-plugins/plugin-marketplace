using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// Paginated list of signature activities for the business.
/// </summary>
public record ActivitiesSignaturesByBusinessResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_pages")]
    public int? TotalPages { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_items")]
    public int? TotalItems { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_page")]
    public int? CurrentPage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public int? Size { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activities")]
    public IReadOnlyList<ActivitiesSignaturesByBusinessEntry>? Activities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
