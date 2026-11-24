namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Dnslookup operation.
/// </summary>
public sealed record DnslookupRequest
{
    /// <summary>
    /// The domain name for which you want to lookup the DNS records. Do not include the protocol, and not subdomains (e.g., myspace.com)
    /// </summary>
    public required string Domain { get; init; }
}
