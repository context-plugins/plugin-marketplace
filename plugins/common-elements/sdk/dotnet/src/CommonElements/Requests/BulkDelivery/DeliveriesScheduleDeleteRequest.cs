using System;

namespace CommonElements.Requests.BulkDelivery;

/// <summary>
/// The inputs of the DeliveriesScheduleDelete operation.
/// </summary>
public sealed record DeliveriesScheduleDeleteRequest
{
    /// <summary>
    /// Schedule id.
    /// </summary>
    public required Guid Id { get; init; }
}
