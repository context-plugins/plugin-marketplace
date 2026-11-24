namespace CommonElements.Requests.AggregatesAndCompliance;

/// <summary>
/// The inputs of the GeoStateSummary operation.
/// </summary>
public sealed record GeoStateSummaryRequest
{
    /// <summary>
    /// Two-letter state code. Omit for every state, ranked by association count.
    /// </summary>
    public string? State { get; init; }
}
