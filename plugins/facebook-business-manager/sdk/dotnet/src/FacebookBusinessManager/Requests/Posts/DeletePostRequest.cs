namespace FacebookBusinessManager.Requests.Posts;

/// <summary>
/// The inputs of the DeletePost operation.
/// </summary>
public sealed record DeletePostRequest
{
    /// <summary>
    /// The ID of the post (format PAGE_ID_POST_ID)
    /// </summary>
    public required string PostId { get; init; }
}
