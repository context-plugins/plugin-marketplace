using System.Text.Json.Serialization;
using AmazonEbs.Core.Models;
using AmazonEbs.Models.Enums;

namespace AmazonEbs.Models;

public record GetSnapshotBlockResponse
{
    /// <summary>
    /// The size of the data in the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataLength")]
    public int? DataLength { get; init; }

    /// <summary>
    /// The data content of the block.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BlockData")]
    public string? BlockData { get; init; }

    /// <summary>
    /// The checksum generated for the block, which is Base64 encoded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Checksum")]
    public string? Checksum { get; init; }

    /// <summary>
    /// The algorithm used to generate the checksum for the block, such as SHA256.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChecksumAlgorithm")]
    public ChecksumAlgorithm? ChecksumAlgorithm { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
