namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the DeleteByExternalId3 operation.
/// </summary>
public sealed record DeleteByExternalId3Request
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
