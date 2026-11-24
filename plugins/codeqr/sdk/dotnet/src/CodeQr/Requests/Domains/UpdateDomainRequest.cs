using CodeQr.Models;

namespace CodeQr.Requests.Domains;

/// <summary>
/// The inputs of the UpdateDomain operation.
/// </summary>
public sealed record UpdateDomainRequest
{
    /// <summary>
    /// The domain name.
    /// </summary>
    public required string Slug { get; init; }

    public DomainsRequest1? Body { get; init; }
}
