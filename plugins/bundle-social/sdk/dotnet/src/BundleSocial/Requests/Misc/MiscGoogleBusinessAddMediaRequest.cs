using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessAddMedia operation.
/// </summary>
public sealed record MiscGoogleBusinessAddMediaRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessMediaRequest? Body { get; init; }
}
