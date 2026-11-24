using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookEditPost operation.
/// </summary>
public sealed record MiscFacebookEditPostRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscFacebookPostRequest? Body { get; init; }
}
