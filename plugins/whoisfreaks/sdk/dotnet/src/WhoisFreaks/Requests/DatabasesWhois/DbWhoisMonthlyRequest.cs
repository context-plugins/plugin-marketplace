using System;

namespace WhoisFreaks.Requests.DatabasesWhois;

/// <summary>
/// The inputs of the DbWhoisMonthly operation.
/// </summary>
public sealed record DbWhoisMonthlyRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
