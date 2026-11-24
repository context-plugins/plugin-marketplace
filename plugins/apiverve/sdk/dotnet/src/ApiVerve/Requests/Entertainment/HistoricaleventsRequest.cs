namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Historicalevents operation.
/// </summary>
public sealed record HistoricaleventsRequest
{
    /// <summary>
    /// The keyword for which you want to get the historical events (e.g., moon landing)
    /// </summary>
    public required string Text { get; init; }
}
