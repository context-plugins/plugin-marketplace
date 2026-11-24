using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessUpdateLocation operation.
/// </summary>
public sealed record MiscGoogleBusinessUpdateLocationRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessLocationRequest? Body { get; init; }
}
