using FacebookBusinessManager.Core.Validation.Attributes;
using FacebookBusinessManager.Models.Enums;

namespace FacebookBusinessManager.Requests.CommentsApi;

/// <summary>
/// The inputs of the GetPostComments operation.
/// </summary>
public sealed record GetPostCommentsRequest
{
    /// <summary>
    /// The ID of the post (format PAGE_ID_POST_ID)
    /// </summary>
    public required string PostId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// Maximum number of objects to return per page
    /// </summary>
    [Maximum(100)]
    public int Limit { get; init; } = 25;

    /// <summary>
    /// Cursor for forward pagination
    /// </summary>
    public string? After { get; init; }

    /// <summary>
    /// Filter for comment type
    /// </summary>
    public Filter? Filter { get; init; }

    /// <summary>
    /// Order of comments
    /// </summary>
    public Order? Order { get; init; }
}
