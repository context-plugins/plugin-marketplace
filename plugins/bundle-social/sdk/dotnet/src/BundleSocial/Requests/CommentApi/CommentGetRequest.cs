namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentGet operation.
/// </summary>
public sealed record CommentGetRequest
{
    public required string Id { get; init; }
}
