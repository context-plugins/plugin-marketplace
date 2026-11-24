using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.DomainNames;

/// <summary>
/// The inputs of the AssociateApi operation.
/// </summary>
public sealed record AssociateApiRequest
{
    /// <summary>
    /// The domain name.
    /// </summary>
    public required string DomainName { get; init; }

    public V1DomainnamesApiassociationRequest? Body { get; init; }
}
