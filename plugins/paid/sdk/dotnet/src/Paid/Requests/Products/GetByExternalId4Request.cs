namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the GetByExternalId4 operation.
/// </summary>
public sealed record GetByExternalId4Request
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
