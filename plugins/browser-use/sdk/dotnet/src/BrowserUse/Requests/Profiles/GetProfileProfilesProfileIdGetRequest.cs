using System;

namespace BrowserUse.Requests.Profiles;

/// <summary>
/// The inputs of the GetProfileProfilesProfileIdGet operation.
/// </summary>
public sealed record GetProfileProfilesProfileIdGetRequest
{
    public required Guid ProfileId { get; init; }
}
