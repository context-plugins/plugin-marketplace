namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentDelete operation.
/// </summary>
public sealed record CommentDeleteRequest
{
    public required string Id { get; init; }
}
