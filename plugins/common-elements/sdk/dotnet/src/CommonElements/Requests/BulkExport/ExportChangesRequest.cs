namespace CommonElements.Requests.BulkExport;

/// <summary>
/// The inputs of the ExportChanges operation.
/// </summary>
public sealed record ExportChangesRequest
{
    /// <summary>
    /// "csv" (default) or "json".
    /// </summary>
    public string? Format { get; init; }

    /// <summary>
    /// Comma-separated column names to narrow the output. An unknown column name 400s and lists the valid set.
    /// </summary>
    public string? Columns { get; init; }

    /// <summary>
    /// Comma-separated change kinds, same vocabulary as /api/v1/changes. Omit for all kinds.
    /// </summary>
    public string? Kind { get; init; }

    /// <summary>
    /// Comma-separated two-letter state codes.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// Single county name, case-insensitive exact match.
    /// </summary>
    public string? County { get; init; }

    /// <summary>
    /// One of "hoa", "condo", "coop".
    /// </summary>
    public string? Subtype { get; init; }

    /// <summary>
    /// Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not widen it.
    /// </summary>
    public string? Since { get; init; }

    /// <summary>
    /// Latest observation date, YYYY-MM-DD.
    /// </summary>
    public string? Until { get; init; }

    /// <summary>
    /// Minimum change magnitude, 0 to 1.
    /// </summary>
    public double? MinMagnitude { get; init; }
}
