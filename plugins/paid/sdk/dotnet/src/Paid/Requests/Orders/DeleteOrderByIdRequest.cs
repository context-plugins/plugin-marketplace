namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the DeleteOrderById operation.
/// </summary>
public sealed record DeleteOrderByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
