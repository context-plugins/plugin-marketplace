namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the Get5 operation.
/// </summary>
public sealed record Get5Request
{
    public required string ProductId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
