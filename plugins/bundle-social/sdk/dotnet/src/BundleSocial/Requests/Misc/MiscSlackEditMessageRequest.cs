using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscSlackEditMessage operation.
/// </summary>
public sealed record MiscSlackEditMessageRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscSlackMessageRequest? Body { get; init; }
}
