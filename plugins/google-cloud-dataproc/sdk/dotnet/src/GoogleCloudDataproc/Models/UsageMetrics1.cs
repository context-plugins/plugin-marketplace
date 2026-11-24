using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only. Approximate workload resource usage, calculated when the workload completes (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).Note: This metric calculation may change in the future, for example, to capture cumulative workload resource consumption during workload execution (see the Dataproc Serverless release notes (https://cloud.google.com/dataproc-serverless/docs/release-notes) for announcements, changes, fixes and other Dataproc developments).
/// </summary>
public record UsageMetrics1
{
    /// <summary>
    /// Optional. Shuffle storage usage in (GB x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleStorageGbSeconds")]
    public string? ShuffleStorageGbSeconds { get; init; }

    /// <summary>
    /// Optional. Accelerator type being used, if any Deprecated: This field is only used in runtime versions below 3.0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acceleratorType")]
    public string? AcceleratorType { get; init; }

    /// <summary>
    /// Optional. L4 accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliAcceleratorSecondsL4")]
    public string? MilliAcceleratorSecondsL4 { get; init; }

    /// <summary>
    /// Optional. A100-40 accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliAcceleratorSecondsA10040")]
    public string? MilliAcceleratorSecondsA10040 { get; init; }

    /// <summary>
    /// Optional. The timestamp of the usage metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Optional. Accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)). Deprecated: This field is only used in runtime versions below 3.0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliAcceleratorSeconds")]
    public string? MilliAcceleratorSeconds { get; init; }

    /// <summary>
    /// Optional. A100-80 accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliAcceleratorSecondsA10080")]
    public string? MilliAcceleratorSecondsA10080 { get; init; }

    /// <summary>
    /// Optional. DCU (Dataproc Compute Units) usage in (milliDCU x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliDcuSeconds")]
    public string? MilliDcuSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
