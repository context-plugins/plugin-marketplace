using BundleSocial.Models;

namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentImportCreate operation.
/// </summary>
public sealed record CommentImportCreateRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1CommentImportRequest? Body { get; init; }
}
