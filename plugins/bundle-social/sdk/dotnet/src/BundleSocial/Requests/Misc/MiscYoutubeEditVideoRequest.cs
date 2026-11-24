using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeEditVideo operation.
/// </summary>
public sealed record MiscYoutubeEditVideoRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscYoutubeVideoRequest? Body { get; init; }
}
