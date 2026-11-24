using System;

namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the GetCloudDiagramsStats operation.
/// </summary>
public sealed record GetCloudDiagramsStatsRequest
{
    /// <summary>
    /// Start of the period.
    /// </summary>
    public required DateTimeOffset Start { get; init; }

    /// <summary>
    /// End of the period.
    /// </summary>
    public required DateTimeOffset End { get; init; }
}
