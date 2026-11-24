using System;

namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the Subscribe operation.
/// </summary>
public sealed record SubscribeRequest
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
    /// The currency code for the order (e.g., "USD", "EUR")
    /// </summary>
    public required string Currency { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
