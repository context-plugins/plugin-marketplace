using BundleSocial.Models;

namespace BundleSocial.Requests.PostApi;

/// <summary>
/// The inputs of the PostCreate operation.
/// </summary>
public sealed record PostCreateRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1PostRequest1? Body { get; init; }
}
