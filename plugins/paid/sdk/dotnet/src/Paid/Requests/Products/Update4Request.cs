using Paid.Models;

namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the Update4 operation.
/// </summary>
public sealed record Update4Request
{
    public required string ProductId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public ProductUpdate? Body { get; init; }
}
