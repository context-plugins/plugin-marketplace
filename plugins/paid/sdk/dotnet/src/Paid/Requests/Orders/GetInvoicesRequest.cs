namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the GetInvoices operation.
/// </summary>
public sealed record GetInvoicesRequest
{
    /// <summary>
    /// The order ID (can be internal ID or display ID)
    /// </summary>
    public required string OrderId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
