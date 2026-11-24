namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentRetry operation.
/// </summary>
public sealed record CommentRetryRequest
{
    public required string Id { get; init; }
}
