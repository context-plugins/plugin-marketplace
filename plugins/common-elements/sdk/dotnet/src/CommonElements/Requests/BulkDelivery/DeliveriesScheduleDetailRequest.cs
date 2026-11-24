using System;

namespace CommonElements.Requests.BulkDelivery;

/// <summary>
/// The inputs of the DeliveriesScheduleDetail operation.
/// </summary>
public sealed record DeliveriesScheduleDetailRequest
{
    /// <summary>
    /// Schedule id.
    /// </summary>
    public required Guid Id { get; init; }
}
