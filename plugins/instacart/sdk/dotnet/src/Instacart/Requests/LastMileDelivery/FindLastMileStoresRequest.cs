using Instacart.Models;

namespace Instacart.Requests.LastMileDelivery;

/// <summary>
/// The inputs of the FindLastMileStores operation.
/// </summary>
public sealed record FindLastMileStoresRequest
{
    public required FindStoresRequest Body { get; init; }
}
