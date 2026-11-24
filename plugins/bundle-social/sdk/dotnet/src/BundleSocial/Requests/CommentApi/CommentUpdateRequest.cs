using BundleSocial.Models;

namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentUpdate operation.
/// </summary>
public sealed record CommentUpdateRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1CommentRequest? Body { get; init; }
}
