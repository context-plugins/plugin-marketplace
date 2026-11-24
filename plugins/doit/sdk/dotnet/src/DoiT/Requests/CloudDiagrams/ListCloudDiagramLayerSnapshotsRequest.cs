using DoiT.Core.Validation.Attributes;

namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the ListCloudDiagramLayerSnapshots operation.
/// </summary>
public sealed record ListCloudDiagramLayerSnapshotsRequest
{
    /// <summary>
    /// Layer ID.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Number of snapshots to skip (default 0).
    /// </summary>
    [Minimum(0)]
    public int? Offset { get; init; }

    /// <summary>
    /// Maximum number of snapshots to return (default 10).
    /// </summary>
    [Minimum(1)]
    public int? Limit { get; init; }

    /// <summary>
    /// Sort expression (e.g. "-createdAt" for descending).
    /// </summary>
    public string? Sort { get; init; }
}
