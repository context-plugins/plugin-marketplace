using System.ComponentModel.DataAnnotations;

namespace Shortcut.Requests.Search;

/// <summary>
/// The inputs of the SearchDocuments operation.
/// </summary>
public sealed record SearchDocumentsRequest
{
    /// <summary>
    /// Search text to match against document titles. Supports fuzzy matching. Required.
    /// </summary>
    [MinLength(1)]
    public required string Title { get; init; }

    /// <summary>
    /// When true, find archived documents. When false, find non-archived documents.
    /// </summary>
    public bool? Archived { get; init; }

    /// <summary>
    /// When true, find documents created by the current user. When false, find documents NOT created by current user.
    /// </summary>
    public bool? CreatedByMe { get; init; }

    /// <summary>
    /// When true, find documents that the current user is following. When false, find documents NOT followed.
    /// </summary>
    public bool? FollowedByMe { get; init; }

    /// <summary>
    /// The number of search results to include in a page. Minimum of 1 and maximum of 250.
    /// </summary>
    public long? PageSize { get; init; }

    /// <summary>
    /// The next page token.
    /// </summary>
    public string? Next { get; init; }
}
