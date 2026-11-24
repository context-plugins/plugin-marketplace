using Paid.Models;

namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the UpdateByExternalId3 operation.
/// </summary>
public sealed record UpdateByExternalId3Request
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public ProductUpdate? Body { get; init; }
}
