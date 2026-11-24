namespace ApiVerve.Requests.News;

/// <summary>
/// The inputs of the NewsInvoke operation.
/// </summary>
public sealed record NewsRequest
{
    /// <summary>
    /// The news category for which you want to get the news. Allowed values: business, entertainment, world, health, science, sports, technology
    /// </summary>
    public required string Category { get; init; }

    /// <summary>
    /// Maximum number of articles to return
    /// </summary>
    public int? Limit { get; init; }
}
