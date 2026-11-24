namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the GetByExternalId3 operation.
/// </summary>
public sealed record GetByExternalId3Request
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
