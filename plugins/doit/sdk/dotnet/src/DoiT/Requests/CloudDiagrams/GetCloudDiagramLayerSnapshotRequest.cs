namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the GetCloudDiagramLayerSnapshot operation.
/// </summary>
public sealed record GetCloudDiagramLayerSnapshotRequest
{
    /// <summary>
    /// Layer ID.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Snapshot ID.
    /// </summary>
    public required string SnapshotId { get; init; }
}
