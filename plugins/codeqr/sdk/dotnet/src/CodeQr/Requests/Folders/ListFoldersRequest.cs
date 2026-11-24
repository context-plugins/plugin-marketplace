using CodeQr.Core.Validation.Attributes;

namespace CodeQr.Requests.Folders;

/// <summary>
/// The inputs of the ListFolders operation.
/// </summary>
public sealed record ListFoldersRequest
{
    /// <summary>
    /// The search term to filter the folders by.
    /// </summary>
    public string? Search { get; init; }

    /// <summary>
    /// The page number for pagination.
    /// </summary>
    [ExclusiveMinimum(0)]
    public double Page { get; init; } = 1d;

    /// <summary>
    /// The number of items per page.
    /// </summary>
    [Maximum(50.0)]
    [ExclusiveMinimum(0)]
    public double PageSize { get; init; } = 50d;
}
