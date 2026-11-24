using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Ignore metric values within these inclusive bounds for percentage-change alerts. Bounds use the metric units, not percentage-change units, and must satisfy lowerBound &lt;= upperBound. Omission on PATCH preserves the range; null clears it. Changing condition away from percentage-change clears the range; supplying a non-null range with another condition is rejected.
/// </summary>
public record AlertIgnoreValuesRange
{
    [JsonPropertyName("lowerBound")]
    public required double LowerBound { get; init; }

    [JsonPropertyName("upperBound")]
    public required double UpperBound { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
