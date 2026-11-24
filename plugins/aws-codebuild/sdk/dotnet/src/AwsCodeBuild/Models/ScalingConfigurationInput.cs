using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ScalingConfigurationInput
{
    /// <summary>
    /// The scaling type for a compute fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scalingType")]
    public ScalingType? ScalingType { get; init; }

    /// <summary>
    /// A list of TargetTrackingScalingConfiguration objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetTrackingScalingConfigs")]
    public IReadOnlyList<TargetTrackingScalingConfiguration>? TargetTrackingScalingConfigs { get; init; }

    /// <summary>
    /// The maximum number of instances in the ﬂeet when auto-scaling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxCapacity")]
    public int? MaxCapacity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
