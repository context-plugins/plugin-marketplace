using System;

namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the Upgrade operation.
/// </summary>
public sealed record UpgradeRequest
{
    /// <summary>
    /// The external ID of the customer
    /// </summary>
    public required string CustomerExternalId { get; init; }

    /// <summary>
    /// The ID of the current plan
    /// </summary>
    public required Guid OldPlanId { get; init; }

    /// <summary>
    /// The ID of the plan to upgrade to
    /// </summary>
    public required Guid NewPlanId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
