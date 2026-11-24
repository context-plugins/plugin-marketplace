using CodeQr.Models;

namespace CodeQr.Requests.Domains;

/// <summary>
/// The inputs of the CreateDomain operation.
/// </summary>
public sealed record CreateDomainRequest
{
    public DomainsRequest? Body { get; init; }
}
