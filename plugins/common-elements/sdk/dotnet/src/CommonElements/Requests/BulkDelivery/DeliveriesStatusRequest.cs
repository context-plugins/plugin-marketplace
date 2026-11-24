using System;

namespace CommonElements.Requests.BulkDelivery;

/// <summary>
/// The inputs of the DeliveriesStatus operation.
/// </summary>
public sealed record DeliveriesStatusRequest
{
    /// <summary>
    /// Delivery id returned when the delivery was requested.
    /// </summary>
    public required Guid Id { get; init; }
}
