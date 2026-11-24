using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscLinkedinResharePost operation.
/// </summary>
public sealed record MiscLinkedinResharePostRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscLinkedinPostReshareRequest? Body { get; init; }
}
