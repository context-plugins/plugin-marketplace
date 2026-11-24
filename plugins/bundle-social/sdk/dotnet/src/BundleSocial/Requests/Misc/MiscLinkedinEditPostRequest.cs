using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscLinkedinEditPost operation.
/// </summary>
public sealed record MiscLinkedinEditPostRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscLinkedinPostRequest? Body { get; init; }
}
