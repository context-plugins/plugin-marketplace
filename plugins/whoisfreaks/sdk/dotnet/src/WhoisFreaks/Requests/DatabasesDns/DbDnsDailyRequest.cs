using System;

namespace WhoisFreaks.Requests.DatabasesDns;

/// <summary>
/// The inputs of the DbDnsDaily operation.
/// </summary>
public sealed record DbDnsDailyRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
