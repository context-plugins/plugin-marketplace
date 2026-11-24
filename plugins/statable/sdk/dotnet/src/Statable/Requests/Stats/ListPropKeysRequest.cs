namespace Statable.Requests.Stats;

/// <summary>
/// The inputs of the ListPropKeys operation.
/// </summary>
public sealed record ListPropKeysRequest
{
    /// <summary>
    /// Numeric site id. Optional for a single-site key; required for an all-sites key.
    /// </summary>
    public long? SiteId { get; init; }

    /// <summary>
    /// Same forms as /query (default 30d): a preset <c>7d</c>/<c>30d</c>/<c>month</c>, or a URL-encoded custom pair <c>["YYYY-MM-DD","YYYY-MM-DD"]</c>.
    /// </summary>
    public string? DateRange { get; init; }
}
