using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateChapCredentialsInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return the TargetARN for specified VolumeARN.
    /// </summary>
    [JsonPropertyName("TargetARN")]
    public required string TargetArn { get; init; }

    /// <summary>
    /// The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target. The secret key must be between 12 and 16 bytes when encoded in UTF-8.
    /// </summary>
    [JsonPropertyName("SecretToAuthenticateInitiator")]
    public required string SecretToAuthenticateInitiator { get; init; }

    /// <summary>
    /// The iSCSI initiator that connects to the target.
    /// </summary>
    [JsonPropertyName("InitiatorName")]
    public required string InitiatorName { get; init; }

    /// <summary>
    /// The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client). Byte constraints: Minimum bytes of 12. Maximum bytes of 16. The secret key must be between 12 and 16 bytes when encoded in UTF-8.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SecretToAuthenticateTarget")]
    public string? SecretToAuthenticateTarget { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
