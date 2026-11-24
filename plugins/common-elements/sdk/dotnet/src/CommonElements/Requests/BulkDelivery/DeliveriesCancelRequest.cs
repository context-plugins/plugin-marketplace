using System;

namespace CommonElements.Requests.BulkDelivery;

/// <summary>
/// The inputs of the DeliveriesCancel operation.
/// </summary>
public sealed record DeliveriesCancelRequest
{
    /// <summary>
    /// Delivery id.
    /// </summary>
    public required Guid Id { get; init; }
}
