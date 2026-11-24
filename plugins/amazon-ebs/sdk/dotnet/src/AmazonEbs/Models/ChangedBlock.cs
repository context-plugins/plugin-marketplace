using System.Text.Json.Serialization;
using AmazonEbs.Core.Models;

namespace AmazonEbs.Models;

public record ChangedBlock
{
    /// <summary>
    /// The block index.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BlockIndex")]
    public int? BlockIndex { get; init; }

    /// <summary>
    /// The block token for the block index of the FirstSnapshotId specified in the ListChangedBlocks operation. This value is absent if the first snapshot does not have the changed block that is on the second snapshot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FirstBlockToken")]
    public string? FirstBlockToken { get; init; }

    /// <summary>
    /// The block token for the block index of the SecondSnapshotId specified in the ListChangedBlocks operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SecondBlockToken")]
    public string? SecondBlockToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
