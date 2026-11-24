using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record FlywheelFilter
{
    /// <summary>
    /// Filter the flywheels based on the flywheel status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status10? Status { get; init; }

    /// <summary>
    /// Filter the flywheels to include flywheels created after the specified time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimeAfter")]
    public DateTimeOffset? CreationTimeAfter { get; init; }

    /// <summary>
    /// Filter the flywheels to include flywheels created before the specified time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimeBefore")]
    public DateTimeOffset? CreationTimeBefore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
