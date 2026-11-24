using AmazonEbs.Models.Enums;

namespace AmazonEbs.Requests.AmazonEbsAmazonElasticBlockStoreEbsApi;

/// <summary>
/// The inputs of the CompleteSnapshot operation.
/// </summary>
public sealed record CompleteSnapshotRequest
{
    /// <summary>
    /// The ID of the snapshot.
    /// </summary>
    public required string SnapshotId { get; init; }

    /// <summary>
    /// The number of blocks that were written to the snapshot.
    /// </summary>
    public required int XAmzChangedBlocksCount { get; init; }

    /// <summary>
    /// An aggregated Base-64 SHA256 checksum based on the checksums of each written block. To generate the aggregated checksum using the linear aggregation method, arrange the checksums for each written block in ascending order of their block index, concatenate them to form a single string, and then generate the checksum on the entire string using the SHA256 algorithm.
    /// </summary>
    public string? XAmzChecksum { get; init; }

    /// <summary>
    /// The algorithm used to generate the checksum. Currently, the only supported algorithm is SHA256.
    /// </summary>
    public XAmzChecksumAlgorithm? XAmzChecksumAlgorithm { get; init; }

    /// <summary>
    /// The aggregation method used to generate the checksum. Currently, the only supported aggregation method is LINEAR.
    /// </summary>
    public XAmzChecksumAggregationMethod? XAmzChecksumAggregationMethod { get; init; }
}
