namespace NordicFinancialNews.Requests.SearchApi;

/// <summary>
/// The inputs of the GetApiV1Search operation.
/// </summary>
public sealed record GetApiV1SearchRequest
{
    /// <summary>
    /// Full-text search query (2-200 characters).
    /// </summary>
    public required string Q { get; init; }

    /// <summary>
    /// Comma-separated list of resource types to search. Defaults to all types. Valid values: <c>articles</c>, <c>stories</c>, <c>companies</c>, <c>countries</c>, <c>exchanges</c>, <c>indices</c>.
    /// </summary>
    public string? Type { get; init; }

    /// <summary>
    /// Maximum number of results per resource type (default 5, max 25).
    /// </summary>
    public int? Limit { get; init; }
}
