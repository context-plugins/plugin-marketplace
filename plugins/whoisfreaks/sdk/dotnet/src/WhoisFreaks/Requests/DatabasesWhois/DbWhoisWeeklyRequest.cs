using System;

namespace WhoisFreaks.Requests.DatabasesWhois;

/// <summary>
/// The inputs of the DbWhoisWeekly operation.
/// </summary>
public sealed record DbWhoisWeeklyRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
