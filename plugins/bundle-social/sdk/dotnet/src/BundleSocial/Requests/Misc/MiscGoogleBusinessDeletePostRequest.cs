using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessDeletePost operation.
/// </summary>
public sealed record MiscGoogleBusinessDeletePostRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessPostRequest? Body { get; init; }
}
