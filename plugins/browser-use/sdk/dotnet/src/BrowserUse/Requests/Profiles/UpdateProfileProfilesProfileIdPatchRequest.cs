using System;
using BrowserUse.Models;

namespace BrowserUse.Requests.Profiles;

/// <summary>
/// The inputs of the UpdateProfileProfilesProfileIdPatch operation.
/// </summary>
public sealed record UpdateProfileProfilesProfileIdPatchRequest
{
    public required Guid ProfileId { get; init; }

    public required ProfileUpdateRequest Body { get; init; }
}
