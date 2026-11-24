using Instacart.Models;

namespace Instacart.Requests.Pickup;

/// <summary>
/// The inputs of the FindPickupStores operation.
/// </summary>
public sealed record FindPickupStoresRequest
{
    public required FindStoresRequest Body { get; init; }
}
