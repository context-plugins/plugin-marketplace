using System.Text.Json.Serialization;
using AmazonEbs.Core.Models;
using AmazonEbs.Models.Enums;

namespace AmazonEbs.Models;

public record PutSnapshotBlockResponse
{
    /// <summary>
    /// The SHA256 checksum generated for the block data by Amazon EBS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Checksum")]
    public string? Checksum { get; init; }

    /// <summary>
    /// The algorithm used by Amazon EBS to generate the checksum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChecksumAlgorithm")]
    public ChecksumAlgorithm1? ChecksumAlgorithm { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
