using System;

namespace WhoisFreaks.Requests.DatabasesWhois;

/// <summary>
/// The inputs of the DbWhoisDaily operation.
/// </summary>
public sealed record DbWhoisDailyRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
