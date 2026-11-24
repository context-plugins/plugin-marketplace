namespace Statable.Requests.Stats;

/// <summary>
/// The inputs of the ListFunnels operation.
/// </summary>
public sealed record ListFunnelsRequest
{
    /// <summary>
    /// Numeric site id. Optional for a single-site key (defaults to its site); required for an all-sites key.
    /// </summary>
    public long? SiteId { get; init; }
}
