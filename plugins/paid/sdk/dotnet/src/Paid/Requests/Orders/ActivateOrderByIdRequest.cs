namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the ActivateOrderById operation.
/// </summary>
public sealed record ActivateOrderByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
