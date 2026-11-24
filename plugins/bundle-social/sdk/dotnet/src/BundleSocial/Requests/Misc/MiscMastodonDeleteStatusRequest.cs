using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscMastodonDeleteStatus operation.
/// </summary>
public sealed record MiscMastodonDeleteStatusRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscMastodonStatusRequest1? Body { get; init; }
}
