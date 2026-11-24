namespace Curlec.Requests.Orders;

/// <summary>
/// The inputs of the FetchOrderPayments operation.
/// </summary>
public sealed record FetchOrderPaymentsRequest
{
    /// <summary>
    /// Order ID (order_*).
    /// </summary>
    public required string Id { get; init; }
}
