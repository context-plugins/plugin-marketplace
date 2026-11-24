using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Dev;

/// <summary>
/// The inputs of the DnsEpDnsGet operation.
/// </summary>
public sealed record DnsEpDnsGetRequest
{
    /// <summary>
    /// domain, e.g. example.com
    /// </summary>
    public required string Name { get; init; }

    /// <summary>
    /// A | AAAA | MX | TXT | NS | CNAME | SOA | CAA
    /// </summary>
    public string Type { get; init; } = "A";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
