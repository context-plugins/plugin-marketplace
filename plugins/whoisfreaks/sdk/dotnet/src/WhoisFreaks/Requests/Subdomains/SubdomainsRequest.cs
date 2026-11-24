using System;
using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.Subdomains;

/// <summary>
/// The inputs of the SubdomainsInvoke operation.
/// </summary>
public sealed record SubdomainsRequest
{
    public required string Domain { get; init; }

    public DateTimeOffset? After { get; init; }

    public DateTimeOffset? Before { get; init; }

    public Status? Status { get; init; }

    public int Page { get; init; } = 1;

    public Format Format { get; init; } = Format.Json;
}
