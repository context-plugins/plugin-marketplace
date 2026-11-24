namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the Get4 operation.
/// </summary>
public sealed record Get4Request
{
    public required string OrderId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
