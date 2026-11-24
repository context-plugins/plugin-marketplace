using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Specifies the config of boot disk and attached disk options for a group of VM instances.
/// </summary>
public record DiskConfig
{
    /// <summary>
    /// Optional. Size in GB of the boot disk (default is 500GB).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bootDiskSizeGb")]
    public int? BootDiskSizeGb { get; init; }

    /// <summary>
    /// Optional. Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. This field is supported only if boot_disk_type is hyperdisk-balanced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bootDiskProvisionedIops")]
    public string? BootDiskProvisionedIops { get; init; }

    /// <summary>
    /// Optional. Type of the boot disk (default is pd-standard). Valid values: pd-balanced (Persistent Disk Balanced Solid State Drive), pd-ssd (Persistent Disk Solid State Drive), or pd-standard (Persistent Disk Hard Disk Drive). See Disk types (https://cloud.google.com/compute/docs/disks#disk-types).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bootDiskType")]
    public string? BootDiskType { get; init; }

    /// <summary>
    /// Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.Note: Local SSD options may vary by machine type and number of vCPUs selected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numLocalSsds")]
    public int? NumLocalSsds { get; init; }

    /// <summary>
    /// Optional. Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle. Values must be greater than or equal to 1. This field is supported only if boot_disk_type is hyperdisk-balanced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bootDiskProvisionedThroughput")]
    public string? BootDiskProvisionedThroughput { get; init; }

    /// <summary>
    /// Optional. A list of attached disk configs for a group of VM instances.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachedDiskConfigs")]
    public IReadOnlyList<AttachedDiskConfig>? AttachedDiskConfigs { get; init; }

    /// <summary>
    /// Optional. Interface type of local SSDs (default is scsi). Valid values: scsi (Small Computer System Interface), nvme (Non-Volatile Memory Express). See local SSD performance (https://cloud.google.com/compute/docs/disks/local-ssd#performance).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localSsdInterface")]
    public string? LocalSsdInterface { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
