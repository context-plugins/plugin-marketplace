using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookDeletePost operation.
/// </summary>
public sealed record MiscFacebookDeletePostRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscFacebookPostRequest1? Body { get; init; }
}
