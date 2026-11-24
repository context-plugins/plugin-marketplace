namespace Bitbucket.Requests.Search;

/// <summary>
/// The inputs of the SearchWorkspace operation.
/// </summary>
public sealed record SearchWorkspaceRequest
{
    /// <summary>
    /// The workspace to search in; either the slug or the UUID in curly braces
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The search query
    /// </summary>
    public required string SearchQuery { get; init; }

    /// <summary>
    /// Which page of the search results to retrieve
    /// </summary>
    public int Page { get; init; } = 1;

    /// <summary>
    /// How many search results to retrieve per page
    /// </summary>
    public int Pagelen { get; init; } = 10;
}
