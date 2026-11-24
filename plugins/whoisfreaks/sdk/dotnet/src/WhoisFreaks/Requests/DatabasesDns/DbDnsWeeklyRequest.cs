using System;

namespace WhoisFreaks.Requests.DatabasesDns;

/// <summary>
/// The inputs of the DbDnsWeekly operation.
/// </summary>
public sealed record DbDnsWeeklyRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
