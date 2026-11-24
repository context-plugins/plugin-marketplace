using Paid.Models;

namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the Create4 operation.
/// </summary>
public sealed record Create4Request
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public OrderCreate? Body { get; init; }
}
