using WhoisFreaks.Models;
using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.Whois;

/// <summary>
/// The inputs of the BulkWhois operation.
/// </summary>
public sealed record BulkWhoisRequest
{
    public Format Format { get; init; } = Format.Json;

    public required V20BulkwhoisLiveRequest Body { get; init; }
}
