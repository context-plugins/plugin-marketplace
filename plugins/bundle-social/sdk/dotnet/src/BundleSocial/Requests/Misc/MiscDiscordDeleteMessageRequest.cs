using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscDiscordDeleteMessage operation.
/// </summary>
public sealed record MiscDiscordDeleteMessageRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscDiscordMessageRequest? Body { get; init; }
}
