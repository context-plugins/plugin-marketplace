using Paid.Models;

namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the Create5 operation.
/// </summary>
public sealed record Create5Request
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public ProductCreate? Body { get; init; }
}
