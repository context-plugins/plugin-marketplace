using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Specifies the config of attached disk options for single VM instance.
/// </summary>
public record AttachedDiskConfig
{
    /// <summary>
    /// Optional. Indicates how many IOPS to provision for the attached disk. This sets the number of I/O operations per second that the disk can handle. See https://cloud.google.com/compute/docs/disks/hyperdisks#hyperdisk-features
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provisionedIops")]
    public string? ProvisionedIops { get; init; }

    /// <summary>
    /// Optional. Disk size in GB.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diskSizeGb")]
    public int? DiskSizeGb { get; init; }

    /// <summary>
    /// Optional. Deprecated: Use type instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diskType")]
    public DiskType? DiskType { get; init; }

    /// <summary>
    /// Optional. Indicates how much throughput to provision for the attached disk. This sets the number of throughput mb per second that the disk can handle. See https://cloud.google.com/compute/docs/disks/hyperdisks#hyperdisk-features
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provisionedThroughput")]
    public string? ProvisionedThroughput { get; init; }

    /// <summary>
    /// Optional. Attached disk type. Currently only supports Hyperdisks. See https://cloud.google.com/compute/docs/disks/hyperdisks. Note: Hyperdisk Balanced High Availability is not supported.Allowed values are: hyperdisk-balanced hyperdisk-extreme hyperdisk-ml hyperdisk-throughput
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
