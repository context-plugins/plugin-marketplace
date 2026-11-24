using Bitly.Models;

namespace Bitly.Requests.GroupsApi;

/// <summary>
/// The inputs of the UpdateGroupPreferences operation.
/// </summary>
public sealed record UpdateGroupPreferencesRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

    public required GroupPreferences Body { get; init; }
}
