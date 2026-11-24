namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the Delete4 operation.
/// </summary>
public sealed record Delete4Request
{
    public required string OrderId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
