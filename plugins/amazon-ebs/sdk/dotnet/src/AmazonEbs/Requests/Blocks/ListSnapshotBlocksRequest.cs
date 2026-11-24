namespace AmazonEbs.Requests.Blocks;

/// <summary>
/// The inputs of the ListSnapshotBlocks operation.
/// </summary>
public sealed record ListSnapshotBlocksRequest
{
    /// <summary>
    /// The ID of the snapshot from which to get block indexes and block tokens.
    /// </summary>
    public required string SnapshotId { get; init; }

    /// <summary>
    /// The token to request the next page of results. If you specify NextToken, then StartingBlockIndex is ignored.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// The maximum number of blocks to be returned by the request. Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned NextToken value. The value of NextToken is null when there are no more blocks to return.
    /// </summary>
    public int? MaxResults { get; init; }

    /// <summary>
    /// The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot. If you specify NextToken, then StartingBlockIndex is ignored.
    /// </summary>
    public int? StartingBlockIndex { get; init; }
}
