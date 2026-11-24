using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeDeleteVideo operation.
/// </summary>
public sealed record MiscYoutubeDeleteVideoRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscYoutubeVideoRequest1? Body { get; init; }
}
