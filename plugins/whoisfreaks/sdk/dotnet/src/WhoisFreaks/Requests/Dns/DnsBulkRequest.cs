using WhoisFreaks.Models;
using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.Dns;

/// <summary>
/// The inputs of the DnsBulk operation.
/// </summary>
public sealed record DnsBulkRequest
{
    public string Type { get; init; } = "all";

    public Format Format { get; init; } = Format.Json;

    public required V20DnsBulkLiveRequest Body { get; init; }
}
