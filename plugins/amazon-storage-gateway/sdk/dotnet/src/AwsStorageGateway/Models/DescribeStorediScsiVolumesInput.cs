using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeStorediScsiVolumesInput
{
    /// <summary>
    /// An array of strings where each string represents the Amazon Resource Name (ARN) of a stored volume. All of the specified stored volumes must be from the same gateway. Use ListVolumes to get volume ARNs for a gateway.
    /// </summary>
    [JsonPropertyName("VolumeARNs")]
    public required IReadOnlyList<string> VolumeArNs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
