using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeSnapshotScheduleOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the volume that was specified in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeARN")]
    public string? VolumeArn { get; init; }

    /// <summary>
    /// The hour of the day at which the snapshot schedule begins represented as hh, where hh is the hour (0 to 23). The hour of the day is in the time zone of the gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartAt")]
    public int? StartAt { get; init; }

    /// <summary>
    /// The number of hours between snapshots.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RecurrenceInHours")]
    public int? RecurrenceInHours { get; init; }

    /// <summary>
    /// The snapshot description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    /// <summary>
    /// A value that indicates the time zone of the gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timezone")]
    public string? Timezone { get; init; }

    /// <summary>
    /// A list of up to 50 tags assigned to the snapshot schedule, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource API operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
