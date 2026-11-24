using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscMastodonEditStatus operation.
/// </summary>
public sealed record MiscMastodonEditStatusRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscMastodonStatusRequest? Body { get; init; }
}
