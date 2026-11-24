using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessUpdatePlaceActionLink operation.
/// </summary>
public sealed record MiscGoogleBusinessUpdatePlaceActionLinkRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1? Body { get; init; }
}
