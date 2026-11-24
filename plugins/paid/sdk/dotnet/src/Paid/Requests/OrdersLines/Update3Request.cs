using Paid.Models;

namespace Paid.Requests.OrdersLines;

/// <summary>
/// The inputs of the Update3 operation.
/// </summary>
public sealed record Update3Request
{
    public required string OrderId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public OrdersLinesRequest? Body { get; init; }
}
