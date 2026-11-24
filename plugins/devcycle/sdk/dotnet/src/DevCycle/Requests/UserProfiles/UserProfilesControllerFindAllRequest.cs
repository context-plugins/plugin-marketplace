namespace DevCycle.Requests.UserProfiles;

/// <summary>
/// The inputs of the UserProfilesControllerFindAll operation.
/// </summary>
public sealed record UserProfilesControllerFindAllRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
