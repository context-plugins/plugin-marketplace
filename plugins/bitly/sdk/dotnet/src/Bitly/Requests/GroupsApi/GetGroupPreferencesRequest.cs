namespace Bitly.Requests.GroupsApi;

/// <summary>
/// The inputs of the GetGroupPreferences operation.
/// </summary>
public sealed record GetGroupPreferencesRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }
}
