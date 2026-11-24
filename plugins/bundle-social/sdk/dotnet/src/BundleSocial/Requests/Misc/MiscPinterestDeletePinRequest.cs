using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscPinterestDeletePin operation.
/// </summary>
public sealed record MiscPinterestDeletePinRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscPinterestPinRequest1? Body { get; init; }
}
