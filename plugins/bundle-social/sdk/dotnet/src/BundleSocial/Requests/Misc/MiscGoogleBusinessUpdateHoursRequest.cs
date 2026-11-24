using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessUpdateHours operation.
/// </summary>
public sealed record MiscGoogleBusinessUpdateHoursRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessLocationHoursRequest? Body { get; init; }
}
