using System;

namespace WhoisFreaks.Requests.DatabasesNewlyRegistered;

/// <summary>
/// The inputs of the DbNewlyGtld operation.
/// </summary>
public sealed record DbNewlyGtldRequest
{
    public required bool Whois { get; init; }

    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }

    public string? Tlds { get; init; }
}
