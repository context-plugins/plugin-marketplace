using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.DomainNames;

/// <summary>
/// The inputs of the UpdateDomainName operation.
/// </summary>
public sealed record UpdateDomainNameRequest
{
    /// <summary>
    /// The domain name.
    /// </summary>
    public required string DomainName { get; init; }

    public V1DomainnamesRequest1? Body { get; init; }
}
