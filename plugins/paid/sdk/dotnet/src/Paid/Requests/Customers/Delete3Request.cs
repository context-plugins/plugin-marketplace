namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the Delete3 operation.
/// </summary>
public sealed record Delete3Request
{
    public required string CustomerId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
