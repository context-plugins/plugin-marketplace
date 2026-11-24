namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the GetEntitlements operation.
/// </summary>
public sealed record GetEntitlementsRequest
{
    /// <summary>
    /// The customer ID
    /// </summary>
    public required string CustomerId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
