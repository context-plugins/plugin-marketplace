namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Cpiinflation operation.
/// </summary>
public sealed record CpiinflationRequest
{
    /// <summary>
    /// Optional date in YYYY-MM format for historical lookup. Omit for current data.
    /// </summary>
    public string? Date { get; init; }

    /// <summary>
    /// Optional category filter: all, food, housing, apparel, transportation, medical, recreation, education, gasoline, electricity
    /// </summary>
    public string? Category { get; init; }
}
