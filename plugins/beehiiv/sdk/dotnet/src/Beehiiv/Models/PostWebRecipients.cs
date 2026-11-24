using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PostWebRecipients
{
    /// <summary>
    /// The tier IDs to target. Accepts specific tier UUIDs or the special values <c>"free"</c>, <c>"premium"</c>, or <c>"all"</c>. When <c>"all"</c> is provided, targets all subscriber tiers — free subscribers, and premium subscribers if the publication has an active paid tier.
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
