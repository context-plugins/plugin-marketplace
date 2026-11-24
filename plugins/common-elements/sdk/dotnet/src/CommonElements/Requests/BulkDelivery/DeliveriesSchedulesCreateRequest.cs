using CommonElements.Models;

namespace CommonElements.Requests.BulkDelivery;

/// <summary>
/// The inputs of the DeliveriesSchedulesCreate operation.
/// </summary>
public sealed record DeliveriesSchedulesCreateRequest
{
    public required ApiV1DeliveriesSchedulesRequest Body { get; init; }
}
