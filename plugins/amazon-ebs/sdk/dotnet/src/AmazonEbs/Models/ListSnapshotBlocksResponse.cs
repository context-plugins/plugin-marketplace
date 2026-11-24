using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonEbs.Core.Models;

namespace AmazonEbs.Models;

public record ListSnapshotBlocksResponse
{
    /// <summary>
    /// An array of objects containing information about the blocks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Blocks")]
    public IReadOnlyList<Block>? Blocks { get; init; }

    /// <summary>
    /// The time when the BlockToken expires.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExpiryTime")]
    public DateTimeOffset? ExpiryTime { get; init; }

    /// <summary>
    /// The size of the volume in GB.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeSize")]
    public int? VolumeSize { get; init; }

    /// <summary>
    /// The size of the blocks in the snapshot, in bytes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BlockSize")]
    public int? BlockSize { get; init; }

    /// <summary>
    /// The token to use to retrieve the next page of results. This value is null when there are no more results to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
