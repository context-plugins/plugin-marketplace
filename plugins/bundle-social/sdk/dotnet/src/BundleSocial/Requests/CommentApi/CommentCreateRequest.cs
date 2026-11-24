using BundleSocial.Models;

namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentCreate operation.
/// </summary>
public sealed record CommentCreateRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1CommentRequest1? Body { get; init; }
}
