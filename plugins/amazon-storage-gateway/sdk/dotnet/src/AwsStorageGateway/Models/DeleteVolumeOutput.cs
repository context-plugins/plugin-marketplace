using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DeleteVolumeOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same ARN you provided in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeARN")]
    public string? VolumeArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
