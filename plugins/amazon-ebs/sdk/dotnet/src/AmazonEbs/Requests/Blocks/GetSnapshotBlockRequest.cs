namespace AmazonEbs.Requests.Blocks;

/// <summary>
/// The inputs of the GetSnapshotBlock operation.
/// </summary>
public sealed record GetSnapshotBlockRequest
{
    /// <summary>
    /// The ID of the snapshot containing the block from which to get data. If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide.
    /// </summary>
    public required string SnapshotId { get; init; }

    /// <summary>
    /// The block index of the block in which to read the data. A block index is a logical index in units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/524288). The logical offset of the data must be 512 KiB aligned.
    /// </summary>
    public required int BlockIndex { get; init; }

    /// <summary>
    /// The block token of the block from which to get data. You can obtain the BlockToken by running the ListChangedBlocks or ListSnapshotBlocks operations.
    /// </summary>
    public required string BlockToken { get; init; }
}
