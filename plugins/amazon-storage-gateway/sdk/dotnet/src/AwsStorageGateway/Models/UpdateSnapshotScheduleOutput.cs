using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateSnapshotScheduleOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeARN")]
    public string? VolumeArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
