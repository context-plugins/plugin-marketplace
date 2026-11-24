using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessUpdateAttributes operation.
/// </summary>
public sealed record MiscGoogleBusinessUpdateAttributesRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessLocationAttributesRequest? Body { get; init; }
}
