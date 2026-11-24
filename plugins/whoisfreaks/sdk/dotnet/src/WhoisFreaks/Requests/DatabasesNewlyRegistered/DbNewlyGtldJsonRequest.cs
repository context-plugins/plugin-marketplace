using System;

namespace WhoisFreaks.Requests.DatabasesNewlyRegistered;

/// <summary>
/// The inputs of the DbNewlyGtldJson operation.
/// </summary>
public sealed record DbNewlyGtldJsonRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }

    public string? Tlds { get; init; }
}
