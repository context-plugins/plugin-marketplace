using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessUpdateServiceList operation.
/// </summary>
public sealed record MiscGoogleBusinessUpdateServiceListRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessLocationServiceListRequest? Body { get; init; }
}
