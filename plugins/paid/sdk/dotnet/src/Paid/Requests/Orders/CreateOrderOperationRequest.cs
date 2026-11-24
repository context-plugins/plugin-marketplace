using Paid.Models;

namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the CreateOrder operation.
/// </summary>
public sealed record CreateOrderOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CreateOrderRequest? Body { get; init; }
}
