using System;

namespace WhoisFreaks.Requests.DatabasesNewlyRegistered;

/// <summary>
/// The inputs of the DbNewlyCctldJson operation.
/// </summary>
public sealed record DbNewlyCctldJsonRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }

    public string? Tlds { get; init; }
}
