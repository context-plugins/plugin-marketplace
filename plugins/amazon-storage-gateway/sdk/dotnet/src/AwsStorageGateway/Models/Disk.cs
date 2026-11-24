using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record Disk
{
    /// <summary>
    /// The unique device ID or other distinguishing data that identifies a local disk.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DiskId")]
    public string? DiskId { get; init; }

    /// <summary>
    /// The path of a local disk in the gateway virtual machine (VM).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DiskPath")]
    public string? DiskPath { get; init; }

    /// <summary>
    /// The device node of a local disk as assigned by the virtualization environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DiskNode")]
    public string? DiskNode { get; init; }

    /// <summary>
    /// A value that represents the status of a local disk.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DiskStatus")]
    public string? DiskStatus { get; init; }

    /// <summary>
    /// The local disk size in bytes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DiskSizeInBytes")]
    public int? DiskSizeInBytes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DiskAllocationType")]
    public string? DiskAllocationType { get; init; }

    /// <summary>
    /// The iSCSI qualified name (IQN) that is defined for a disk. This field is not included in the response if the local disk is not defined as an iSCSI target. The format of this field is targetIqn::LUNNumber::region-volumeId.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DiskAllocationResource")]
    public string? DiskAllocationResource { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DiskAttributeList")]
    public IReadOnlyList<string>? DiskAttributeList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
