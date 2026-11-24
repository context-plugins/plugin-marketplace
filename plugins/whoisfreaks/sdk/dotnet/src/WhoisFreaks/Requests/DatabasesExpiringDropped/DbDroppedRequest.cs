using System;

namespace WhoisFreaks.Requests.DatabasesExpiringDropped;

/// <summary>
/// The inputs of the DbDropped operation.
/// </summary>
public sealed record DbDroppedRequest
{
    public required bool Whois { get; init; }

    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
