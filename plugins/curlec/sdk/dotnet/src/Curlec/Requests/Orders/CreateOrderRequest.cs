using Curlec.Models;

namespace Curlec.Requests.Orders;

/// <summary>
/// The inputs of the CreateOrder operation.
/// </summary>
public sealed record CreateOrderRequest
{
    public required OrdersRequest Body { get; init; }
}
