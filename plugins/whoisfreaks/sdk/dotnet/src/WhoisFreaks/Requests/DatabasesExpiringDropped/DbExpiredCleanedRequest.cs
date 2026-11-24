using System;

namespace WhoisFreaks.Requests.DatabasesExpiringDropped;

/// <summary>
/// The inputs of the DbExpiredCleaned operation.
/// </summary>
public sealed record DbExpiredCleanedRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
