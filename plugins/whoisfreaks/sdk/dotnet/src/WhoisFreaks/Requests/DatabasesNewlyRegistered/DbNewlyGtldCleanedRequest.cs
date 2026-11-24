using System;

namespace WhoisFreaks.Requests.DatabasesNewlyRegistered;

/// <summary>
/// The inputs of the DbNewlyGtldCleaned operation.
/// </summary>
public sealed record DbNewlyGtldCleanedRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
