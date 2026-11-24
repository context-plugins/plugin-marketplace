using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessDeletePlaceActionLink operation.
/// </summary>
public sealed record MiscGoogleBusinessDeletePlaceActionLinkRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2? Body { get; init; }
}
