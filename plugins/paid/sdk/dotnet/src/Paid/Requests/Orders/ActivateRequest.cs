namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the Activate operation.
/// </summary>
public sealed record ActivateRequest
{
    public required string OrderId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
