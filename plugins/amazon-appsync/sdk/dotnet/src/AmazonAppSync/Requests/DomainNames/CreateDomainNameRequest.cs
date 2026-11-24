using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.DomainNames;

/// <summary>
/// The inputs of the CreateDomainName operation.
/// </summary>
public sealed record CreateDomainNameRequest
{
    public V1DomainnamesRequest? Body { get; init; }
}
