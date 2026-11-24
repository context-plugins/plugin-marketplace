using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessDeleteMedia operation.
/// </summary>
public sealed record MiscGoogleBusinessDeleteMediaRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessMediaRequest1? Body { get; init; }
}
