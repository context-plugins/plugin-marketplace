using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record CreateSnapshotInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
    /// </summary>
    [JsonPropertyName("VolumeARN")]
    public required string VolumeArn { get; init; }

    /// <summary>
    /// Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel in the Description field, and in the Storage Gateway snapshot Details pane, Description field.
    /// </summary>
    [JsonPropertyName("SnapshotDescription")]
    public required string SnapshotDescription { get; init; }

    /// <summary>
    /// A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
