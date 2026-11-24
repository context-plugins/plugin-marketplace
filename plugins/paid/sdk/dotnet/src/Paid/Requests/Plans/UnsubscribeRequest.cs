using System;

namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the Unsubscribe operation.
/// </summary>
public sealed record UnsubscribeRequest
{
    /// <summary>
    /// The ID of the plan
    /// </summary>
    public required Guid PlanId { get; init; }

    /// <summary>
    /// The external ID of the customer
    /// </summary>
    public required string CustomerExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
