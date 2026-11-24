namespace RelmCrm.Requests.WebhooksApi;

/// <summary>
/// The inputs of the ListDeliveries operation.
/// </summary>
public sealed record ListDeliveriesRequest
{
    public required string Id { get; init; }
}
