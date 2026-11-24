using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.AsnWhois;

/// <summary>
/// The inputs of the AsnWhoisInvoke operation.
/// </summary>
public sealed record AsnWhoisRequest
{
    public required string Asn { get; init; }

    public Format Format { get; init; } = Format.Json;
}
