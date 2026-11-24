namespace Bitly.Requests.GroupsApi;

/// <summary>
/// The inputs of the GetGroup operation.
/// </summary>
public sealed record GetGroupRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }
}
