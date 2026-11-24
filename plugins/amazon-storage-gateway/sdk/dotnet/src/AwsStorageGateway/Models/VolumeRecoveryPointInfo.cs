using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record VolumeRecoveryPointInfo
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the volume target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeARN")]
    public string? VolumeArn { get; init; }

    /// <summary>
    /// The size of the volume in bytes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeSizeInBytes")]
    public int? VolumeSizeInBytes { get; init; }

    /// <summary>
    /// The size of the data stored on the volume in bytes. This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeUsageInBytes")]
    public int? VolumeUsageInBytes { get; init; }

    /// <summary>
    /// The time the recovery point was taken.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeRecoveryPointTime")]
    public string? VolumeRecoveryPointTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
