using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record ListVolumeInitiatorsInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes for the gateway.
    /// </summary>
    [JsonPropertyName("VolumeARN")]
    public required string VolumeArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
