using System.Collections.Generic;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the ListCloudDiagramActivityGroups operation.
/// </summary>
public sealed record ListCloudDiagramActivityGroupsRequest
{
    /// <summary>
    /// Layer ID.
    /// </summary>
    public required string SsId { get; init; }

    /// <summary>
    /// Maximum number of groups to return (default 10).
    /// </summary>
    [Minimum(1)]
    public int? Limit { get; init; }

    /// <summary>
    /// Number of groups to skip (default 0).
    /// </summary>
    [Minimum(0)]
    public int? Offset { get; init; }

    /// <summary>
    /// Filter by tags.
    /// </summary>
    public IReadOnlyList<string>? Tags { get; init; }
}
