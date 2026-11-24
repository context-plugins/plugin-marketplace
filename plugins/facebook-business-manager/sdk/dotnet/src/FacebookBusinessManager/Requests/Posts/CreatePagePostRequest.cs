using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.Posts;

/// <summary>
/// The inputs of the CreatePagePost operation.
/// </summary>
public sealed record CreatePagePostRequest
{
    /// <summary>
    /// The ID of the Facebook Page
    /// </summary>
    public required string PageId { get; init; }

    public required PostCreate Body { get; init; }
}
