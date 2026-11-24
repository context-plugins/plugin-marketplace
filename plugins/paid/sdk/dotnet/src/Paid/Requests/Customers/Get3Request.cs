namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the Get3 operation.
/// </summary>
public sealed record Get3Request
{
    public required string CustomerId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
