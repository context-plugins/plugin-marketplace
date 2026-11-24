using System;

namespace WhoisFreaks.Requests.DatabasesExpiringDropped;

/// <summary>
/// The inputs of the DbDroppedBacklinks operation.
/// </summary>
public sealed record DbDroppedBacklinksRequest
{
    public bool? Whois { get; init; }

    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
