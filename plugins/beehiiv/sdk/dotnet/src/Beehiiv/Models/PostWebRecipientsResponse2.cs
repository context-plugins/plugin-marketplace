using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Web targeting configuration. Absent if the post has no web targets.
/// </summary>
public record PostWebRecipientsResponse2
{
    /// <summary>
    /// The tier IDs targeted for web. Values are <c>"free"</c>, <c>"premium"</c>, or a specific tier's prefixed ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tier_ids")]
    public IReadOnlyList<string>? TierIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include_segment_ids")]
    public IReadOnlyList<string>? IncludeSegmentIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclude_segment_ids")]
    public IReadOnlyList<string>? ExcludeSegmentIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
