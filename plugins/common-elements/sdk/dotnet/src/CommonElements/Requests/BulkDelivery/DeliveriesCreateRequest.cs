using CommonElements.Models;

namespace CommonElements.Requests.BulkDelivery;

/// <summary>
/// The inputs of the DeliveriesCreate operation.
/// </summary>
public sealed record DeliveriesCreateRequest
{
    public required ApiV1DeliveriesRequest Body { get; init; }
}
