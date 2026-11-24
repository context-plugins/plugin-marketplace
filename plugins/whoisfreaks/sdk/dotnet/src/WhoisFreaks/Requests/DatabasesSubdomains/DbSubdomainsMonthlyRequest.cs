using System;

namespace WhoisFreaks.Requests.DatabasesSubdomains;

/// <summary>
/// The inputs of the DbSubdomainsMonthly operation.
/// </summary>
public sealed record DbSubdomainsMonthlyRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
