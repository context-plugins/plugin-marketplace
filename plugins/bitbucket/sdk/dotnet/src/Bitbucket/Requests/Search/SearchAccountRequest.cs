namespace Bitbucket.Requests.Search;

/// <summary>
/// The inputs of the SearchAccount operation.
/// </summary>
public sealed record SearchAccountRequest
{
    /// <summary>
    /// Either the UUID of the account surrounded by curly-braces, for example <c>{account UUID}</c>, OR an Atlassian Account ID.
    /// </summary>
    public required string SelectedUser { get; init; }

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
