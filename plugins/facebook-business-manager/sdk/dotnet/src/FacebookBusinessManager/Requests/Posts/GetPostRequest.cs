namespace FacebookBusinessManager.Requests.Posts;

/// <summary>
/// The inputs of the GetPost operation.
/// </summary>
public sealed record GetPostRequest
{
    /// <summary>
    /// The ID of the post (format PAGE_ID_POST_ID)
    /// </summary>
    public required string PostId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response
    /// </summary>
    public string? Fields { get; init; }
}
