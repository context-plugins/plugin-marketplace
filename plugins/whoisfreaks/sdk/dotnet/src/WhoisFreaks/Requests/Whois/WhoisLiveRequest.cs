using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.Whois;

/// <summary>
/// The inputs of the WhoisLive operation.
/// </summary>
public sealed record WhoisLiveRequest
{
    public required string DomainName { get; init; }

    public Format Format { get; init; } = Format.Json;
}
