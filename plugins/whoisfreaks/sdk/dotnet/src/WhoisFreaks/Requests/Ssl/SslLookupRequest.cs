using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.Ssl;

/// <summary>
/// The inputs of the SslLookup operation.
/// </summary>
public sealed record SslLookupRequest
{
    public required string DomainName { get; init; }

    public bool Chain { get; init; } = false;

    public bool SslRaw { get; init; } = false;

    public Format Format { get; init; } = Format.Json;
}
