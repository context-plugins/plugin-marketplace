namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the ListEpicsPaginated operation.
/// </summary>
public sealed record ListEpicsPaginatedRequest
{
    /// <summary>
    /// A true/false boolean indicating whether to return Epics with their descriptions.
    /// </summary>
    public bool? IncludesDescription { get; init; }

    /// <summary>
    /// The page number to return, starting with 1. Defaults to 1.
    /// </summary>
    public long? Page { get; init; }

    /// <summary>
    /// The number of Epics to return per page. Minimum 1, maximum 250, default 10.
    /// </summary>
    public long? PageSize { get; init; }
}
