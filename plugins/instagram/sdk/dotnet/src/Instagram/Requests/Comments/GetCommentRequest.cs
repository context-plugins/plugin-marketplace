namespace Instagram.Requests.Comments;

/// <summary>
/// The inputs of the GetComment operation.
/// </summary>
public sealed record GetCommentRequest
{
    public required string CommentId { get; init; }

    public required string AccessToken { get; init; }

    public string? Fields { get; init; }
}
