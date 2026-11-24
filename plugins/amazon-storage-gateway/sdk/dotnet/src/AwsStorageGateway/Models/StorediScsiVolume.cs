using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record StorediScsiVolume
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the storage volume.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeARN")]
    public string? VolumeArn { get; init; }

    /// <summary>
    /// The unique identifier of the volume, e.g., vol-AE4B946D.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeId")]
    public string? VolumeId { get; init; }

    /// <summary>
    /// One of the VolumeType enumeration values describing the type of the volume.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeType")]
    public string? VolumeType { get; init; }

    /// <summary>
    /// One of the VolumeStatus values that indicates the state of the storage volume.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeStatus")]
    public string? VolumeStatus { get; init; }

    /// <summary>
    /// A value that indicates whether a storage volume is attached to, detached from, or is in the process of detaching from a gateway. For more information, see Moving your volumes to a different gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeAttachmentStatus")]
    public string? VolumeAttachmentStatus { get; init; }

    /// <summary>
    /// The size of the volume in bytes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeSizeInBytes")]
    public int? VolumeSizeInBytes { get; init; }

    /// <summary>
    /// Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the stored volume is not restoring or bootstrapping.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeProgress")]
    public double? VolumeProgress { get; init; }

    /// <summary>
    /// The ID of the local disk that was specified in the CreateStorediSCSIVolume operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeDiskId")]
    public string? VolumeDiskId { get; init; }

    /// <summary>
    /// If the stored volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-78e22663. Otherwise, this field is not included.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceSnapshotId")]
    public string? SourceSnapshotId { get; init; }

    /// <summary>
    /// Indicates if when the stored volume was created, existing data on the underlying local disk was preserved. Valid Values: true | false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PreservedExistingData")]
    public bool? PreservedExistingData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeiSCSIAttributes")]
    public VolumeiScsiAttributes? VolumeiScsiAttributes { get; init; }

    /// <summary>
    /// The date the volume was created. Volumes created prior to March 28, 2017 don’t have this timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreatedDate")]
    public DateTimeOffset? CreatedDate { get; init; }

    /// <summary>
    /// The size of the data stored on the volume in bytes. This value is calculated based on the number of blocks that are touched, instead of the actual amount of data written. This value can be useful for sequential write patterns but less accurate for random write patterns. VolumeUsedInBytes is different from the compressed size of the volume, which is the value that is used to calculate your bill. This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeUsedInBytes")]
    public int? VolumeUsedInBytes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSKey")]
    public string? KmsKey { get; init; }

    /// <summary>
    /// The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TargetName")]
    public string? TargetName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
