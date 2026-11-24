using Instacart.Models;

namespace Instacart.Requests.Delivery;

/// <summary>
/// The inputs of the FindDeliveryStores operation.
/// </summary>
public sealed record FindDeliveryStoresRequest
{
    public required FindStoresRequest Body { get; init; }
}
