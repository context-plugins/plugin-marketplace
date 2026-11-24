using System;

namespace WhoisFreaks.Requests.DatabasesNewlyRegistered;

/// <summary>
/// The inputs of the DbNewlyDns operation.
/// </summary>
public sealed record DbNewlyDnsRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
