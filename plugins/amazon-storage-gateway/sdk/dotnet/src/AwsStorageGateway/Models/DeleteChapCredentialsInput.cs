using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DeleteChapCredentialsInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return to retrieve the TargetARN for specified VolumeARN.
    /// </summary>
    [JsonPropertyName("TargetARN")]
    public required string TargetArn { get; init; }

    /// <summary>
    /// The iSCSI initiator that connects to the target.
    /// </summary>
    [JsonPropertyName("InitiatorName")]
    public required string InitiatorName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
