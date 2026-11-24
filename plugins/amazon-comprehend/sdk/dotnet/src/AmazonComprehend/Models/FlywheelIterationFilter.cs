using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record FlywheelIterationFilter
{
    /// <summary>
    /// Filter the flywheel iterations to include iterations created after the specified time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimeAfter")]
    public DateTimeOffset? CreationTimeAfter { get; init; }

    /// <summary>
    /// Filter the flywheel iterations to include iterations created before the specified time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimeBefore")]
    public DateTimeOffset? CreationTimeBefore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
