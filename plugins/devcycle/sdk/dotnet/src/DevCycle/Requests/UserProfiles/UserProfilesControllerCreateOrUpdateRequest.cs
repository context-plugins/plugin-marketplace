using DevCycle.Models;

namespace DevCycle.Requests.UserProfiles;

/// <summary>
/// The inputs of the UserProfilesControllerCreateOrUpdate operation.
/// </summary>
public sealed record UserProfilesControllerCreateOrUpdateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateUserProfileDto Body { get; init; }
}
