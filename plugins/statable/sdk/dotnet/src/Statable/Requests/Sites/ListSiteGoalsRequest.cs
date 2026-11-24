namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the ListSiteGoals operation.
/// </summary>
public sealed record ListSiteGoalsRequest
{
    /// <summary>
    /// Numeric site id.
    /// </summary>
    public required long Id { get; init; }
}
