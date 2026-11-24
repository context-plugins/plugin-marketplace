using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Configuration options for writing logs to <see href="https://cloud.google.com/logging/docs/">Stackdriver Logging</see>.
/// </summary>
public record StackdriverLoggingConfig
{
    /// <summary>
    /// Specifies the fraction of operations to write to <see href="https://cloud.google.com/logging/docs/">Stackdriver Logging</see>. This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the default and means that no operations are logged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("samplingRatio")]
    public double? SamplingRatio { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
