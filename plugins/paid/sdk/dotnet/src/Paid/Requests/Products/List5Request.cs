namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the List5 operation.
/// </summary>
public sealed record List5Request
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
