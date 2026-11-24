namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the GetOrderLines operation.
/// </summary>
public sealed record GetOrderLinesRequest
{
    public required string Id { get; init; }

    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
