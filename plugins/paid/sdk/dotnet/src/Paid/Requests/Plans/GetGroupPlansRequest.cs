using System;

namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the GetGroupPlans operation.
/// </summary>
public sealed record GetGroupPlansRequest
{
    /// <summary>
    /// The ID of the plan group
    /// </summary>
    public required Guid PlanGroupId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
