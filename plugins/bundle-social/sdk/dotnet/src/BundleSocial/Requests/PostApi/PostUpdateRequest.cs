using BundleSocial.Models;

namespace BundleSocial.Requests.PostApi;

/// <summary>
/// The inputs of the PostUpdate operation.
/// </summary>
public sealed record PostUpdateRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1PostRequest? Body { get; init; }
}
