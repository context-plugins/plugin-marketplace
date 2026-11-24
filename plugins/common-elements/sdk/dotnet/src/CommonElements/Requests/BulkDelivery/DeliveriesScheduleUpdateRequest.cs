using System;
using CommonElements.Models;

namespace CommonElements.Requests.BulkDelivery;

/// <summary>
/// The inputs of the DeliveriesScheduleUpdate operation.
/// </summary>
public sealed record DeliveriesScheduleUpdateRequest
{
    /// <summary>
    /// Schedule id.
    /// </summary>
    public required Guid Id { get; init; }

    public required ApiV1DeliveriesSchedulesRequest1 Body { get; init; }
}
