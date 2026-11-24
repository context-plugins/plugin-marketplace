using AmazonEbs.Models.Enums;

namespace AmazonEbs.Requests.Blocks;

/// <summary>
/// The inputs of the PutSnapshotBlock operation.
/// </summary>
public sealed record PutSnapshotBlockRequest
{
    /// <summary>
    /// The ID of the snapshot. If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide..
    /// </summary>
    public required string SnapshotId { get; init; }

    /// <summary>
    /// The block index of the block in which to write the data. A block index is a logical index in units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/524288). The logical offset of the data must be 512 KiB aligned.
    /// </summary>
    public required int BlockIndex { get; init; }

    /// <summary>
    /// The size of the data to write to the block, in bytes. Currently, the only supported size is 524288 bytes. Valid values: 524288
    /// </summary>
    public required int XAmzDataLength { get; init; }

    /// <summary>
    /// A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported.
    /// </summary>
    public required string XAmzChecksum { get; init; }

    /// <summary>
    /// The algorithm used to generate the checksum. Currently, the only supported algorithm is SHA256.
    /// </summary>
    public required XAmzChecksumAlgorithm XAmzChecksumAlgorithm { get; init; }

    /// <summary>
    /// The progress of the write process, as a percentage.
    /// </summary>
    public int? XAmzProgress { get; init; }

    public string? Body { get; init; }
}
