using Paid.Models;

namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the UpdateByExternalId2 operation.
/// </summary>
public sealed record UpdateByExternalId2Request
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public CustomerUpdate? Body { get; init; }
}
