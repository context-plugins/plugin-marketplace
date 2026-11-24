namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the Delete5 operation.
/// </summary>
public sealed record Delete5Request
{
    public required string ProductId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
