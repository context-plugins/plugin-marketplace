using BrowserUse.Models;

namespace BrowserUse.Requests.Profiles;

/// <summary>
/// The inputs of the CreateProfileProfilesPost operation.
/// </summary>
public sealed record CreateProfileProfilesPostRequest
{
    public ProfileCreateRequest? Body { get; init; }
}
