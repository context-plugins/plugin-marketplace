namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the List3 operation.
/// </summary>
public sealed record List3Request
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
