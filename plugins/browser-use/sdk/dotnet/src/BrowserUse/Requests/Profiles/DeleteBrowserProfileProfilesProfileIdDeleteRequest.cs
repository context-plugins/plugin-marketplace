using System;

namespace BrowserUse.Requests.Profiles;

/// <summary>
/// The inputs of the DeleteBrowserProfileProfilesProfileIdDelete operation.
/// </summary>
public sealed record DeleteBrowserProfileProfilesProfileIdDeleteRequest
{
    public required Guid ProfileId { get; init; }
}
