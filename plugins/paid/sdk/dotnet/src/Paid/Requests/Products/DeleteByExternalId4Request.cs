namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the DeleteByExternalId4 operation.
/// </summary>
public sealed record DeleteByExternalId4Request
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
