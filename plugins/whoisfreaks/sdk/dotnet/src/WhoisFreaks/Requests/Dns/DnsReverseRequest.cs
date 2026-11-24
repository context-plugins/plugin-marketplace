using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.Dns;

/// <summary>
/// The inputs of the DnsReverse operation.
/// </summary>
public sealed record DnsReverseRequest
{
    /// <summary>
    /// IP, CIDR, or record value
    /// </summary>
    public required string Value { get; init; }

    public required TypeEnum Type { get; init; }

    public bool Exact { get; init; } = true;

    public int Page { get; init; } = 1;

    public Format Format { get; init; } = Format.Json;
}
