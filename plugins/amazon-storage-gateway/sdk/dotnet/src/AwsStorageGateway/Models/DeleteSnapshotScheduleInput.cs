using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DeleteSnapshotScheduleInput
{
    /// <summary>
    /// The volume which snapshot schedule to delete.
    /// </summary>
    [JsonPropertyName("VolumeARN")]
    public required string VolumeArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
