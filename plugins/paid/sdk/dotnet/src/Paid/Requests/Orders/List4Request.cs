namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the List4 operation.
/// </summary>
public sealed record List4Request
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
