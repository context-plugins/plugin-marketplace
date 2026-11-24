using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessCreatePlaceActionLink operation.
/// </summary>
public sealed record MiscGoogleBusinessCreatePlaceActionLinkRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest? Body { get; init; }
}
