using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the ListJobsV2JobsGet operation.
/// </summary>
public sealed record ListJobsV2JobsGetRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;

    public TasksetId? TasksetId { get; init; }

    /// <summary>
    /// Only jobs contained by this Project; omitted lists every Project
    /// </summary>
    public ProjectId1? ProjectId { get; init; }
}
