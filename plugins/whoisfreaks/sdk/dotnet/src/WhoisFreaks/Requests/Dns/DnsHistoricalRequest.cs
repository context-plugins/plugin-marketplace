using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.Dns;

/// <summary>
/// The inputs of the DnsHistorical operation.
/// </summary>
public sealed record DnsHistoricalRequest
{
    public required string DomainName { get; init; }

    public string Type { get; init; } = "all";

    public int Page { get; init; } = 1;

    public Format Format { get; init; } = Format.Json;
}
