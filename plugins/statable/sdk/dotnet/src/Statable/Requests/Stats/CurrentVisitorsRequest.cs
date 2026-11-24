namespace Statable.Requests.Stats;

/// <summary>
/// The inputs of the CurrentVisitors operation.
/// </summary>
public sealed record CurrentVisitorsRequest
{
    /// <summary>
    /// Numeric site id. Optional for a single-site key; required for an all-sites key.
    /// </summary>
    public long? SiteId { get; init; }
}
