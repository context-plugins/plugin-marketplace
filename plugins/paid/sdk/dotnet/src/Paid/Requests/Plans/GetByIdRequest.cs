using System;

namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the GetById operation.
/// </summary>
public sealed record GetByIdRequest
{
    /// <summary>
    /// The ID of the plan
    /// </summary>
    public required Guid PlanId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
