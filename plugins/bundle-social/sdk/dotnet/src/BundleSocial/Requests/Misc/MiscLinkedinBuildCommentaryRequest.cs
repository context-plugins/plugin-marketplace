using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscLinkedinBuildCommentary operation.
/// </summary>
public sealed record MiscLinkedinBuildCommentaryRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscLinkedinMentionsBuilderRequest? Body { get; init; }
}
