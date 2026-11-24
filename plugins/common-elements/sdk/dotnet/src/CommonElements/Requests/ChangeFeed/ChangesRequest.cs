namespace CommonElements.Requests.ChangeFeed;

/// <summary>
/// The inputs of the Changes operation.
/// </summary>
public sealed record ChangesRequest
{
    /// <summary>
    /// Comma-separated list of change kinds to include. Any of: board_turnover, board_president_changed, officer_added, officer_removed, officer_title_changed, management_company_changed, management_company_added, management_company_removed, self_managed_transition, entity_status_changed, entity_name_changed, license_added, license_lapsed. Omit for all kinds.
    /// </summary>
    public string? Kind { get; init; }

    /// <summary>
    /// Comma-separated two-letter state codes, e.g. "FL" or "FL,GA,TX". Case-insensitive.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// Single county name, matched exactly as stored (e.g. "Miami-Dade").
    /// </summary>
    public string? County { get; init; }

    /// <summary>
    /// One of "hoa", "condo", "coop".
    /// </summary>
    public string? Subtype { get; init; }

    /// <summary>
    /// Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date does not widen it. Available change history varies by source. Observation dates may differ from when changes took effect, and your plan's lookback window does not guarantee that much history.
    /// </summary>
    public string? Since { get; init; }

    /// <summary>
    /// Latest observation date, YYYY-MM-DD.
    /// </summary>
    public string? Until { get; init; }

    /// <summary>
    /// Only associations with at least this many units.
    /// </summary>
    public double? MinUnits { get; init; }

    /// <summary>
    /// Only associations with at most this many units.
    /// </summary>
    public double? MaxUnits { get; init; }

    /// <summary>
    /// Minimum change magnitude, 0 to 1. Higher means a larger share of the board or record changed at once.
    /// </summary>
    public double? MinMagnitude { get; init; }

    /// <summary>
    /// Rows to return, 1 to 1000 (default 100). Clamped to your plan row cap.
    /// </summary>
    public double? Limit { get; init; }

    /// <summary>
    /// Pagination offset (default 0).
    /// </summary>
    public double? Offset { get; init; }
}
