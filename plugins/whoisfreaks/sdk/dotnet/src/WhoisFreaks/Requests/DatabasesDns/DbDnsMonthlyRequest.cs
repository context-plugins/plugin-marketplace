using System;

namespace WhoisFreaks.Requests.DatabasesDns;

/// <summary>
/// The inputs of the DbDnsMonthly operation.
/// </summary>
public sealed record DbDnsMonthlyRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
