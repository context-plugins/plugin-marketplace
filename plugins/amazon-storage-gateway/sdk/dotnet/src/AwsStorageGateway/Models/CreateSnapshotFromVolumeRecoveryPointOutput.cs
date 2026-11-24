using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record CreateSnapshotFromVolumeRecoveryPointOutput
{
    /// <summary>
    /// The ID of the snapshot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SnapshotId")]
    public string? SnapshotId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for specified VolumeARN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeARN")]
    public string? VolumeArn { get; init; }

    /// <summary>
    /// The time the volume was created from the recovery point.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeRecoveryPointTime")]
    public string? VolumeRecoveryPointTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
