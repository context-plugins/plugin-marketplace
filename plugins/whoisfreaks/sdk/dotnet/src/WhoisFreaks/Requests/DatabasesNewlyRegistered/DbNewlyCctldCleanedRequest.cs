using System;

namespace WhoisFreaks.Requests.DatabasesNewlyRegistered;

/// <summary>
/// The inputs of the DbNewlyCctldCleaned operation.
/// </summary>
public sealed record DbNewlyCctldCleanedRequest
{
    /// <summary>
    /// yyyy-MM-dd; omit for latest
    /// </summary>
    public DateTimeOffset? Date { get; init; }
}
