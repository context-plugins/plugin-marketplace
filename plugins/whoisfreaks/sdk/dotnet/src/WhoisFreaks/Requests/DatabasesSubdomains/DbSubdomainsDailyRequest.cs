using System;

namespace WhoisFreaks.Requests.DatabasesSubdomains;

/// <summary>
/// The inputs of the DbSubdomainsDaily operation.
/// </summary>
public sealed record DbSubdomainsDailyRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
