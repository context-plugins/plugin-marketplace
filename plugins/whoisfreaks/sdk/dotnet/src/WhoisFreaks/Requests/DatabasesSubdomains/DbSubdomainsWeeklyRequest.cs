using System;

namespace WhoisFreaks.Requests.DatabasesSubdomains;

/// <summary>
/// The inputs of the DbSubdomainsWeekly operation.
/// </summary>
public sealed record DbSubdomainsWeeklyRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
