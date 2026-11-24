using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.IpWhois;

/// <summary>
/// The inputs of the IpWhoisInvoke operation.
/// </summary>
public sealed record IpWhoisRequest
{
    public required string Ip { get; init; }

    public Format Format { get; init; } = Format.Json;
}
