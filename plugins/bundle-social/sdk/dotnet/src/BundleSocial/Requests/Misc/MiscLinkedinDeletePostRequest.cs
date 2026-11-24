using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscLinkedinDeletePost operation.
/// </summary>
public sealed record MiscLinkedinDeletePostRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscLinkedinPostRequest1? Body { get; init; }
}
