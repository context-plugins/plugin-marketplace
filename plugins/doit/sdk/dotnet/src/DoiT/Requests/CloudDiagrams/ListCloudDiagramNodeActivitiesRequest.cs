using DoiT.Core.Validation.Attributes;

namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the ListCloudDiagramNodeActivities operation.
/// </summary>
public sealed record ListCloudDiagramNodeActivitiesRequest
{
    /// <summary>
    /// Layer ID.
    /// </summary>
    public required string SsId { get; init; }

    /// <summary>
    /// Node component ID.
    /// </summary>
    public required string NodeId { get; init; }

    /// <summary>
    /// Maximum number of records to return (default 50).
    /// </summary>
    [Minimum(1)]
    public int? Limit { get; init; }

    /// <summary>
    /// Number of records to skip (default 0).
    /// </summary>
    [Minimum(0)]
    public int? Offset { get; init; }
}
