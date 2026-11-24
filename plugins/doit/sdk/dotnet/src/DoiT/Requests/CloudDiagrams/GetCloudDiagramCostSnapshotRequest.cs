using System;
using DoiT.Models.Enums;

namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the GetCloudDiagramCostSnapshot operation.
/// </summary>
public sealed record GetCloudDiagramCostSnapshotRequest
{
    /// <summary>
    /// Layer ID.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Inclusive start of the cost window (ISO date, e.g. <c>2026-04-01</c>).
    /// </summary>
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// Inclusive end of the cost window (ISO date, e.g. <c>2026-04-28</c>).
    /// </summary>
    public required DateTimeOffset EndDate { get; init; }

    /// <summary>
    /// Bucket interval for the trend series. Defaults to <c>day</c> when omitted.
    /// </summary>
    public Interval1? Interval { get; init; }
}
