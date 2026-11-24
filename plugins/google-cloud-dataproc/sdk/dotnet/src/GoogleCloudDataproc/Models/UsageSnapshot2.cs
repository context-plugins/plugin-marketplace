using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only. Snapshot of current workload resource usage.
/// </summary>
public record UsageSnapshot2
{
    /// <summary>
    /// Optional. Milli (one-thousandth) accelerator for A100-80 accelerators. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing))
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliAcceleratorA10080")]
    public string? MilliAcceleratorA10080 { get; init; }

    /// <summary>
    /// Optional. Milli (one-thousandth) accelerator for L4 accelerators. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing))
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliAcceleratorL4")]
    public string? MilliAcceleratorL4 { get; init; }

    /// <summary>
    /// Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) charged at premium tier (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliDcuPremium")]
    public string? MilliDcuPremium { get; init; }

    /// <summary>
    /// Optional. Shuffle Storage in gigabytes (GB). (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing))
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleStorageGb")]
    public string? ShuffleStorageGb { get; init; }

    /// <summary>
    /// Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliDcu")]
    public string? MilliDcu { get; init; }

    /// <summary>
    /// Optional. Accelerator type being used, if any Deprecated: This field is only used in runtime versions below 3.0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acceleratorType")]
    public string? AcceleratorType { get; init; }

    /// <summary>
    /// Optional. Milli (one-thousandth) accelerator. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)) Deprecated: This field is only used in runtime versions below 3.0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliAccelerator")]
    public string? MilliAccelerator { get; init; }

    /// <summary>
    /// Optional. The timestamp of the usage snapshot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("snapshotTime")]
    public string? SnapshotTime { get; init; }

    /// <summary>
    /// Optional. Milli (one-thousandth) accelerator for A100-40 accelerators. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing))
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milliAcceleratorA10040")]
    public string? MilliAcceleratorA10040 { get; init; }

    /// <summary>
    /// Optional. Shuffle Storage in gigabytes (GB) charged at premium tier. (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing))
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleStorageGbPremium")]
    public string? ShuffleStorageGbPremium { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
