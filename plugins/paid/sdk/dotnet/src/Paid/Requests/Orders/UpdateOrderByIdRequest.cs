using Paid.Models;

namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the UpdateOrderById operation.
/// </summary>
public sealed record UpdateOrderByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdateOrderRequest? Body { get; init; }
}
