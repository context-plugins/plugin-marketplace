namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the GetOrderById operation.
/// </summary>
public sealed record GetOrderByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
