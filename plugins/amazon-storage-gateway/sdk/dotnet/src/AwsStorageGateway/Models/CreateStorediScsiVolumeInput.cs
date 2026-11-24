using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record CreateStorediScsiVolumeInput
{
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// The unique identifier for the gateway local disk that is configured as a stored volume. Use ListLocalDisks to list disk IDs for a gateway.
    /// </summary>
    [JsonPropertyName("DiskId")]
    public required string DiskId { get; init; }

    /// <summary>
    /// The snapshot ID (e.g., "snap-1122aabb") of the snapshot to restore as the new stored volume. Specify this field if you want to create the iSCSI storage volume from a snapshot; otherwise, do not include this field. To list snapshots for your account use DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SnapshotId")]
    public string? SnapshotId { get; init; }

    /// <summary>
    /// Set to true if you want to preserve the data on the local disk. Otherwise, set to false to create an empty volume. Valid Values: true | false
    /// </summary>
    [JsonPropertyName("PreserveExistingData")]
    public required bool PreserveExistingData { get; init; }

    /// <summary>
    /// The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
    /// </summary>
    [JsonPropertyName("TargetName")]
    public required string TargetName { get; init; }

    /// <summary>
    /// The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4 and IPv6 addresses. Use DescribeGatewayInformation to get a list of the network interfaces available on a gateway. Valid Values: A valid IP address.
    /// </summary>
    [JsonPropertyName("NetworkInterfaceId")]
    public required string NetworkInterfaceId { get; init; }

    /// <summary>
    /// Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. Optional. Valid Values: true | false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSEncrypted")]
    public bool? KmsEncrypted { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when KMSEncrypted is true. Optional.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSKey")]
    public string? KmsKey { get; init; }

    /// <summary>
    /// A list of up to 50 tags that can be assigned to a stored volume. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
