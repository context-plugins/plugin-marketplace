using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscPinterestEditPin operation.
/// </summary>
public sealed record MiscPinterestEditPinRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscPinterestPinRequest? Body { get; init; }
}
