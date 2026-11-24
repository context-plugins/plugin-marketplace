using BundleSocial.Models;

namespace BundleSocial.Requests.PostImport;

/// <summary>
/// The inputs of the PostImportDeleteImportedPosts operation.
/// </summary>
public sealed record PostImportDeleteImportedPostsRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1PostHistoryImportPostsRequest? Body { get; init; }
}
