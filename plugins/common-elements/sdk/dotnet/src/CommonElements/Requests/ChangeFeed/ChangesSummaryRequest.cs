namespace CommonElements.Requests.ChangeFeed;

/// <summary>
/// The inputs of the ChangesSummary operation.
/// </summary>
public sealed record ChangesSummaryRequest
{
    /// <summary>
    /// Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window. Available change history varies by source. Observation dates may differ from when changes took effect, and your plan's lookback window does not guarantee that much history.
    /// </summary>
    public string? Since { get; init; }

    /// <summary>
    /// Comma-separated two-letter state codes. Omit for all states.
    /// </summary>
    public string? State { get; init; }
}
