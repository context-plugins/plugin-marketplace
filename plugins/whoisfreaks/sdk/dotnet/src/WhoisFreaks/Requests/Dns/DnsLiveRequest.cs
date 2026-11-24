using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.Dns;

/// <summary>
/// The inputs of the DnsLive operation.
/// </summary>
public sealed record DnsLiveRequest
{
    /// <summary>
    /// all or comma-separated: A,MX,NS,TXT,SOA,SPF,AAAA,CNAME
    /// </summary>
    public string Type { get; init; } = "all";

    public string? DomainName { get; init; }

    /// <summary>
    /// Use for PTR lookups
    /// </summary>
    public string? IpAddress { get; init; }

    public Format Format { get; init; } = Format.Json;
}
