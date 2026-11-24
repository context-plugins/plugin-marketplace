using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateSnapshotScheduleInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
    /// </summary>
    [JsonPropertyName("VolumeARN")]
    public required string VolumeArn { get; init; }

    /// <summary>
    /// The hour of the day at which the snapshot schedule begins represented as hh, where hh is the hour (0 to 23). The hour of the day is in the time zone of the gateway.
    /// </summary>
    [JsonPropertyName("StartAt")]
    public required int StartAt { get; init; }

    /// <summary>
    /// Frequency of snapshots. Specify the number of hours between snapshots.
    /// </summary>
    [JsonPropertyName("RecurrenceInHours")]
    public required int RecurrenceInHours { get; init; }

    /// <summary>
    /// Optional description of the snapshot that overwrites the existing description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    /// <summary>
    /// A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
