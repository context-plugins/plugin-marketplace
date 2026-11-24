using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscSlackDeleteMessage operation.
/// </summary>
public sealed record MiscSlackDeleteMessageRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscSlackMessageRequest1? Body { get; init; }
}
