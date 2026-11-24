using System;

namespace WhoisFreaks.Requests.DatabasesExpiringDropped;

/// <summary>
/// The inputs of the DbDroppedJson operation.
/// </summary>
public sealed record DbDroppedJsonRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }

    public string? Tlds { get; init; }
}
